import React, { FormEvent, useEffect, useState } from 'react';
// import { useDebounce } from 'react-use';

import { getSpider } from '../../../../api';

import style from './index.css';

type typeSort = 'd'|'rq'|'s';
type typeModel = 'w'|'g';
interface ProductInterface {
    link: string;
    img: string;
    price: string;
    sales: string;
}

interface ContentPropsInterface {
    category: string
}

function Content({ category }: ContentPropsInterface) {
    const [keyword, setKeyword] = useState(category);
    const [searchValue, setSearchValue] = useState('');
    const [sort, setSort] = useState<typeSort>('rq');
    const [model, setModel] = useState<typeModel>('g');
    const [productList, setProductList] = useState([]);
    const findProduct = () => {
        if (keyword === '') return;
        getSpider({
            keyword,
            sort,
            style: model,
        }).then(({ data }) => {
            setProductList(data);
        });
    };
    useEffect(() => {
        findProduct();
    }, [keyword, sort, model]);

    useEffect(() => {
        setKeyword(category);
    }, [category]);

    const changeSort = (e: any) => {
        const target = e.target;
        setSort(target.dataset.sort);
    };

    const search = (e: FormEvent) => {
        e.preventDefault();
        setKeyword(searchValue);
    };

    const changeStyle = (e: any) => {
        const target = e.target;
        setModel(target.dataset.model);
    };

    const sortMap = {
        s: '综合',
        d: '销量',
        rq: '人气',
    };
    const modelMap = {
        w: '店铺',
        g: '大图',
    };

    return (
        <section className={style.content}>
            <header className={style.header}>
                <span>实时榜</span>
                <div className={style.search}>
                    <form onSubmit={search}>
                        <input onChange={(e) => setSearchValue(e.target.value)} type="text" className={style.searchInput} value={searchValue} placeholder="请输入商品关键词" />
                        <input type="submit" className={style.searchBtn} value="搜索" />
                    </form>
                </div>
            </header>
            <div className={style.rangeWrap}>
                <ul className={style.rangeList} onClick={(e) => changeSort(e)}>
                    {
                        Object.entries(sortMap).map(([key, value]) => (
                            <li className={`${style.range} ${sort === key ? 'active' : ''}`} data-sort={key} key={key}>{value}</li>
                        ))
                    }
                </ul>
                <ul className={style.rangeList} onClick={(e) => changeStyle(e)}>
                    {
                        Object.entries(modelMap).map(([key, value]) => (
                            <li className={`${style.range} ${model === key ? 'active' : ''}`} data-model={key} key={key}>{value}</li>
                        ))
                    }
                </ul>
            </div>

            <ul className={style.treasureList}>
                {
                    productList.map((item: ProductInterface, index) => (
                        <li className={style.treasure} key={index}>
                            <a target="_blank" href={item.link}>
                                <img src={item.img} alt="" className={style.treasure_img} />
                            </a>
                            <div className={style.productPrice}>{item.price}</div>
                            <div className={style.productStatus}>
                                月成交{item.sales}
                            </div>
                        </li>
                    ))
                }

            </ul>
        </section>
    );
}

export default Content;
