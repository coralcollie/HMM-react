import React from 'react';
import Top from '../components/top';
import styles  from './main.module.css'

const Main = () => {
    return (
        <div className={styles.wrap}>
            <Top/>
            <h1>이것은 메인 컴포넌트 입니다.</h1>
        </div>
    );
};
export default Main;