import classes from './ProfileInfo.module.css';

const BackgroundImage = () => {
    return <img className={classes.nature} src="https://clck.ru/TU522" alt='nature' />
};

const ProfileInfo = () => {
    return (
        <div>
            <BackgroundImage />
            <section className={classes.description}>
                <img className={classes.avatar} src="https://clck.ru/TSmqX" alt='avatar' />
                description
            </section>
        </div>
    );
};

export default ProfileInfo;