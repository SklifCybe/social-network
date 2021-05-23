import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <div className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>My Profile</NavLink>
                </div>
                <li className={styles.item}>
                    <NavLink to="/messages" activeClassName={styles.active}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/users' activeClassName={styles.active}>Users</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;