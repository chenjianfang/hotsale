import React, {useState} from 'react';
import Nav from './view/nav/index';
import Content from './view/body/index';

import style from './index.css';

function Main() {
    const [category, setCategory] = useState('女装');
    return (
        <main className={style.main}>
            <Nav onChange={(name) => setCategory(name)}></Nav>
            <Content category={category}></Content>
        </main>
    );
}

export default Main;
