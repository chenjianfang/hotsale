// 正式环境配置
const production = {
    port: '8080', // 后台node服务端口
    host: 'hotsale.com', // 系统域名
    logPath: '/data/files/cis.oa.com/logs/'
};

// 测试环境配置
const test = {};

// 开发环境配置
const development = {};

const getConfig = function () {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'development') {
        Object.assign(production, development);
    } else if (process.env.NODE_ENV === 'test') {
        Object.assign(production, test);
    }
    return production;
};

module.exports = getConfig();
