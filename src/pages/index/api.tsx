import { get } from 'common/js/ajax';

interface GetSpiderInterface {
    keyword: string;
    sort: 'd'|'rq'|'s';
    style: 'w'|'g';
}
export const getSpider = (parmas: GetSpiderInterface) => get('/api/spider', parmas);
