import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default-image.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://api.jsonbin.io/b/6095732f21a9db6e95f79534/1')
            .then(res => {
                props.setUsers(res.data.users);
            });
    };

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Users</h2>
            <div className={styles.users}>
                {
                    props.users.map(user =>
                        <div key={user.id}>
                            <div className={styles.user}>
                                <img src={user.avatarUrl != null ? user.avatarUrl : userPhoto} className={styles.avatar} />
                                <div className={styles.btnFollow}>
                                    {user.followed
                                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.fullname}>{user.fullName}</div>
                                <div className={styles.status}>{user.status}</div>
                                <div className={styles.city}>{user.location.city}</div>
                                <div className={styles.country}>{user.location.country}</div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Users;