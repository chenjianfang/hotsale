const spider = require('./spider');

function routerInit(app) {
    app.use(spider.routes());
}

module.exports = routerInit;
