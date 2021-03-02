import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import classes from './ProfileInfo.module.css';

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