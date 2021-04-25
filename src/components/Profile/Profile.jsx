import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <section>
                <img src="https://clck.ru/UUbFQ" className={styles.picture} />
            </section>
            <section>
                ava + description
                </section>
            <MyPosts />
        </div>
    );
};

export default Profile;