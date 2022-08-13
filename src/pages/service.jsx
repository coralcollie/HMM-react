import React from 'react';
import Top from '../components/top';
import styles from './service.module.css'

const Service = () => {
    return (
        <div className={styles.wrap}>
            <Top/>  
            <h1>이것은 서비스 컴포넌트 입니다.</h1>
        </div>

    );
};

export default Service;