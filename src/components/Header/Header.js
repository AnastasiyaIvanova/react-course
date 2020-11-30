import React from 'react';
import logo from "../../img/logo.png";
import styles from './header.module.css'; 

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_block}>
                <div className={styles.logo}><img src={logo} alt="logo"/></div>
                <h1>GiftsStore</h1>
            </div>
            <ul>
                <li><a href='#'>Что подарить?</a></li>
                <li><a href='#'>Как купить</a></li>
                <li><a href='#'>Доставка</a></li>
            </ul>
        </div>
    )
}

export default Header;