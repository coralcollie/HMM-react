import React from 'react';
import Top from '../components/top';
import styles from './container.module.css'

const Container = () => {
    return (
        <div className={styles.wrap} >
            <Top/>
            <h1>이것은 컨테이너 컴포넌트 입니다.</h1>
        </div>
    );
};

export default Container;