import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default-image.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                //console.log(res.data.items)
                props.setUsers(res.data.items);
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
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.avatar} />
                                <div className={styles.btnFollow}>
                                    {user.followed
                                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </div>
                            <div className={styles.userInfo}>
                                <div>
                                    <div className={styles.fullname}>{user.name}</div>
                                    <div className={styles.status}>{user.status}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Users;