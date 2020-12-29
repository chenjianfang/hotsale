import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true
});

export const get = async (url: string, data = {}) => {
    const res = await axiosInstance.get(url, {
        params: data
    });
    return res.data;
};

export const post = async (url: string, data = {}) => {
    const res = await axiosInstance.post(url, data);
    return res.data;
};
