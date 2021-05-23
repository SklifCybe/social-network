import React from 'react';

import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <section>
            <section>
                <img src="https://clck.ru/UUbFQ" className={styles.picture} alt="background"/>
            </section>
            <section className={styles.description}>
                <img src={props.profile.avatarUrl} alt="avatar" />
                ava + description
            </section>
        </section>
    );
};

export default ProfileInfo;