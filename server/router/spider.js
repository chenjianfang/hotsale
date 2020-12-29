const Router = require('koa-router');
const cheerio = require('cheerio');
const { get } = require('../utils/ajax');
const iret = require('../config/iret');
const db = require('../utils/db');

const router = new Router();

const getYMD = () => {
    const date = new Date();
    return `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
};

const getDBKey = ({ keyword, sort, style } = {}) => `${getYMD()}_keyword_${keyword || 'null'}_sort_${sort || 'null'}_style_${style || 'null'}`;

router.get('/spider', async (ctx) => {
    const { keyword, sort, style } = ctx.query;
    const docs = await db.findDocuments({
        key: getDBKey({ keyword, sort, style }),
    });
    let result = [];
    if (!docs || !docs.length) {
        console.log({ keyword, sort, style });

        const url = `https://list.tmall.com/search_product.htm?q=${encodeURIComponent(keyword)}&sort=${sort}&style=${style}`;
        const res = await get(url);
        const $ = cheerio.load(res);
        const data = $('#J_ItemList').find('.product');
        Array.from(data).forEach((item) => {
            const obj = {};
            const productImg = $(item).find('.productImg-wrap');
            const productNum = $(item).find('.productStatus').children('span');
            let sales = $(productNum.get(0)).text().match(/[1-9.]+/g);
            if (sales) {
                sales = sales[0].includes('.') ? `${sales[0]}万笔` : sales[0];
            } else {
                sales = 0;
            }
            const imgNode = $($(productImg).find('img')[0]);
            obj.link = $(productImg).find('a').attr('href');
            obj.img = imgNode.attr('data-ks-lazyload') || imgNode.attr('src');
            obj.price = $(item).find('.productPrice').text().replace(/\n/g, '');
            obj.sales = sales;
            result.push(obj);
        });

        db.insertDocuments([
            {
                key: getDBKey({ keyword, sort, style }),
                value: result
            }
        ]);
    } else {
        result = docs.pop().value;
    }
    ctx.response.body = {
        ...iret.SUCCESS,
        data: result
    };
});

module.exports = router;
