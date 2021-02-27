import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.logo} src='https://clck.ru/TSmTy' alt='logo'/>
    </header>
};

export default Header;