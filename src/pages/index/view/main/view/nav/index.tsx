import React from 'react';

import style from './index.css';

interface NavPropsInterface {
    onChange: (name: string) => void;
}

function Nav({ onChange }: NavPropsInterface) {
    const change = (e: any) => {
        const target = e.target;
        if (target.nodeName === 'A') {
            target.classList.add('active');
            const name = target.innerText;
            onChange(name);
        }
    }
    return (
        <nav className={style.navWrap}>
            <header className={style.navHeader}>
                品类
            </header>
            <ul className={style.navList} onClick={change}>
                <li className={style.navItem}>
                    <a>女装</a>
                    /
                    <a>内衣</a>
                </li>
                <li className={style.navItem}>
                    <a>男装</a>
                    /
                    <a>户外</a>
                </li>
                <li className={style.navItem}>
                    <a>女鞋</a>
                    /
                    <a>男鞋</a>
                    /
                    <a>箱包</a>
                </li>
                <li className={style.navItem}>
                    <a>美妆</a>
                    /
                    <a>个人护理</a>
                </li>
                <li className={style.navItem}>
                    <a>腕表</a>
                    /
                    <a>眼镜</a>
                    /
                    <a>珠宝饰品</a>
                </li>
                <li className={style.navItem}>
                    <a>手机</a>
                    /
                    <a>数码</a>
                    /
                    <a>电脑办公</a>
                </li>
                <li className={style.navItem}>
                    <a>母婴玩具</a>
                </li>
                <li className={style.navItem}>
                    <a>零食</a>
                    /
                    <a>茶酒</a>
                    /
                    <a>进口食品</a>
                </li>
                <li className={style.navItem}>
                    <a>生鲜水果</a>
                </li>
                <li className={style.navItem}>
                    <a>大家电</a>
                    /
                    <a>生活电器</a>
                </li>
                <li className={style.navItem}>
                    <a>家具建材</a>
                </li>
                <li className={style.navItem}>
                    <a>汽车</a>
                    /
                    <a>配件</a>
                    /
                    <a>用品</a>
                </li>
                <li className={style.navItem}>
                    <a>家纺</a>
                    /
                    <a>家饰</a>
                    /
                    <a>鲜花</a>
                </li>
                <li className={style.navItem}>
                    <a>医药保健</a>
                </li>
                <li className={style.navItem}>
                    <a>厨具</a>
                    /
                    <a>收纳</a>
                    /
                    <a>宠物</a>
                </li>
                <li className={style.navItem}>
                    <a>图书音像</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
