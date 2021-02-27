import classes from './SideBar.module.css';

const SideBar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sideBar}>
            <li><a href=''>Profile</a></li>
            <li><a href=''>Message</a></li>
            <li><a href=''>News</a></li>
            <li><a href=''>Music</a></li>
        </ul>
    </nav>
};

export default SideBar;