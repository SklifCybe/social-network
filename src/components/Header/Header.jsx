import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" />
        </header>
    );
};

export default Header;