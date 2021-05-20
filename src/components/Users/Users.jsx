import React from 'react';
import axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default-image.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3001/users')
            .then(res => {
                console.log(res.data);
                this.props.setUsers(res.data);
            });
    }
    render() {
        return (
            <div className={styles.content}>
                <h2 className={styles.title}>Users</h2>
                <div className={styles.users}>
                    {
                        this.props.users.map(user =>
                            <div key={user.id}>
                                <div className={styles.user}>
                                    <img src={user.avatarUrl != null ? user.avatarUrl : userPhoto} className={styles.avatar} />
                                    <div className={styles.btnFollow}>
                                        {user.followed
                                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
        )
    }
};

export default Users;