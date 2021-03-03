import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideBar.module.css';

const SideBar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sideBar}>
            <li className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to='/messenger' activeClassName={classes.activeLink}>Messenger</NavLink>
            </li>
            <li className='item'><a href='/news'>News</a></li>
            <li className='item'><a href='/music'>Music</a></li>
            <li className='item'><a href='/settings'>Settings</a></li>
        </ul>
    </nav>
};

export default SideBar;