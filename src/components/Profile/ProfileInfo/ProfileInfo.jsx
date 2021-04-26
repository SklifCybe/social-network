import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <section>
            <section>
                <img src="https://clck.ru/UUbFQ" className={styles.picture} />
            </section>
            <section className={styles.description}>
                ava + description
            </section>
        </section>
    );
};

export default ProfileInfo;