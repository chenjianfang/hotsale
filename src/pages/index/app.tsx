import React from 'react';

import Head from './view/head/index';
import Main from './view/main/index';

import style from './app.css';

function App() {
    return (
        <div className={style.container}>
            <Head />
            <Main></Main>
        </div>
    );
}

export default App;
