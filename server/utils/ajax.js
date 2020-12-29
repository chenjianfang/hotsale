const axios = require('axios').default;

const axiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true,
    responseEncoding: 'utf8', // default
    headers: {
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'Content-Type': 'application/json',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        cookie: 'cna=X1ktGD1mMWUCAXF0F+nBpDHV; hng=CN%7Czh-CN%7CCNY%7C156; lid=%E6%9E%AF%E8%97%A4%E8%9C%97%E8%81%9A%E9%9B%86; enc=%2FOEXb3isp00pACe8xp9GlzVcvyp0Q5R0JbvR%2BFUmLBxbX0ciuQ0Yg320U1bSxtULpCafrZCpxQvG7AdDN%2FaOyA%3D%3D; OZ_1U_2061=vid=vfa66b8f928534.0&ctime=1604742031&ltime=0; _med=dw:1920&dh:1080&pw:1920&ph:1080&ist:0; cq=ccp%3D1; tk_trace=1; xlly_s=1; sgcookie=E100ssr19f9kmaQV2YhenOMYo7l54knqvPC4Ypne%2FjxF5SYy2cUduVFdwIsy8NE2XkDCiiXde%2F2UqkfaP1tCMwhgnA%3D%3D; uc3=lg2=WqG3DMC9VAQiUQ%3D%3D&vt3=F8dCufOHxglLnsCMJJo%3D&nk2=3Gnp0J1QRbP%2F0Q%3D%3D&id2=UoTV7N6UL61LLA%3D%3D; t=b30218a84a27cd122a09561076158d62; tracknick=%5Cu67AF%5Cu85E4%5Cu8717%5Cu805A%5Cu96C6; uc4=nk4=0%403h3s0Vn%2BuSFvDWXacYrAANq6ulZu&id4=0%40UOx%2FVCpYXSGAOSGTFQW5w%2F5gTH8%2F; lgc=%5Cu67AF%5Cu85E4%5Cu8717%5Cu805A%5Cu96C6; _tb_token_=e1e8d4ae18834; cookie2=1a5abc4606ca33227aeeee8078cdf3b0; _m_h5_tk=8f0ac67e72f6a4a94abacf14a643b52c_1606066352775; _m_h5_tk_enc=44afab6acfac60496fdb11dc552b8b39; x5sec=7b22746d616c6c7365617263683b32223a226332653732356463333233313830326633396663353931303866626530663535434d696d36763046454e50776a2f474d7874755144686f4d4d5455354d4467354e7a6b354f44737a227d; pnm_cku822=098%23E1hvXQvUvbpvUvCkvvvvvjiWP2dv0jDvn2dW1j3mPmPOAjYWPFFZljrURssvsj3Ri9hvCvvv9UURvpvhvv2MMQ9CvhQvscwvCszpAWFpHF%2BSBiVvQRA1%2B2n79nFIAfUTnZJt9ExreCyaUExr1WkKD7UVkbmDYEKwJHLXS47BhC3qVUcnDOmfjLEc6acEKBmAKvhv8vvvvUrvpvvvvvvCEyCvmVIvvUUvphvW9vvv99CvpvQyvvmmvhCv2moUvpvVmvvC9c3Ruvhvmvvv9buQOHhivvhvC9vhvvCvp29Cvvpvvvvv; res=scroll%3A990*7099-client%3A588*666-offset%3A588*7099-screen%3A1280*800; tfstk=c15hBiXgthifwZvGhWOCk4-jA3ZOZsMeA_5d_1onuh_hyZfNiDHZ3SpQShr-PY1..; l=eBa5fO7mO6k40zl2BOfZlurza77OSIRYMuPzaNbMiOCPOF1e59rlWZ7ZfjTwC3hVhsw9R3z1om2MBeYBcn06rVmstBALurkmn; isg=BE1NnEN4LpbogoqmwNGOjVLMXG_HKoH8D5T16I_SieRThm04V3qRzJsU8RrgHpm0',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    }
});

const get = async (url, data = {}) => {
    const res = await axiosInstance.get(url, {
        params: data
    });
    return res.data;
};

const post = async (url, data = {}) => {
    const res = await axiosInstance.post(url, data);
    return res.data;
};

module.exports = {
    get,
    post
};
