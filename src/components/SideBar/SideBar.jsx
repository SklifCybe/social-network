import classes from './SideBar.module.css';

const SideBar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sideBar}>
            <li><a href='/profile'>Profile</a></li>
            <li><a href='/messenger'>Messenger</a></li>
            <li><a href='/news'>News</a></li>
            <li><a href='/music'>Music</a></li>
        </ul>
    </nav>
};

export default SideBar;