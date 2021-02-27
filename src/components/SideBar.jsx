import classes from './SideBar.module.css';

const SideBar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sideBar}>
            <li>Profile</li>
            <li>Message</li>
            <li>News</li>
            <li>Music</li>
        </ul>
    </nav>
};

export default SideBar;