const IRet = {
    // 成功
    SUCCESS: {
        code: 0,
        msg: 'success'
    },

    NOT_LOGIN: {
        code: -1,
        msg: '未登录'
    },
    NOT_ALLOW: {
        code: -2,
        msg: '没有权限'
    },
    INVALID_QUERY: { // 数据库请求失败
        code: -4,
        msg: 'invalid SQL query',
    },

    INVALID_API_QUERY: { // api请求失败
        code: -5,
        msg: 'invalid API query',
    },

    TOKEN_FAIL: { // 获取access_token失败
        code: -6,
        msg: 'get access_token error',
    },
    NOT_ALLOW_ADVERTISER: { // 没有权限操作该广告主
        code: -7,
        msg: '没有权限操作该广告主',
    },
    NOT_ALLOW_ADMIN: { // 没有系统管理员权限
        code: -8,
        msg: '权限不足',
    },

    DATA_NOT_CORRECT: { // POST数据不正确
        code: -100,
        msg: '数据不正确',
    },

    // 数据为空
    EMPTY_DATA: {
        code: -1000,
        msg: 'empty data',
    },

    // 未知错误
    UNKNOW: {
        code: -10000,
        msg: 'unknow'
    },
    // 自定义错误
    COMMON_ERR: {
        code: -10001,
        msg: '自定义错误'
    },
    EXIT_TOKEN: {
        code: -10005,
        msg: '当前账户已存在'
    },
    ERROR_URL: {
        code: -10006,
        msg: 'url 不存在'
    },
    INVALID_DATA_ADD: {
        code: -10006,
        msg: '当前数据已存在'
    }

};

module.exports = IRet;
