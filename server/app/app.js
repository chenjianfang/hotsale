const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const config = require('../config/index');
const routerInit = require('../router/index');

const app = new Koa();
app.use(bodyParser());

routerInit(app);

app.listen(config.port);
console.log(`listening on port ${config.port}`);
