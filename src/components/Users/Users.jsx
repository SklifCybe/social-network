import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <img src={user.avatarUrl} className={styles.avatar} />
                            <div className={styles.btnFollow}>
                                {user.followed
                                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.contry}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>)
            }
        </div>
    );
};

export default Users;