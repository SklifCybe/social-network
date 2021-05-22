import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/images/default-image.png';
import './users.scss';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data);
            });
        axios.get('http://localhost:3001/totalUsers')
            .then(res => {
                this.props.setTotalUsersCount(res.data.count);
            });
    }
    
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);

        axios.get(`http://localhost:3001/users?_page=${page}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) pages.push(i)

        return (
            <div className="users">
                <h2 className="users__title">Users</h2>
                <div className="users__items">
                    {
                        this.props.users.map(user =>
                            <div key={user.id}>
                                <div className="users__items-item">
                                    <img src={user.avatarUrl != null ? user.avatarUrl : userPhoto} className="users__avatar" />
                                    <div className="users__btn-follow">
                                        {user.followed
                                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                                    </div>
                                </div>
                                <div className="users__items-info">
                                    <div className="users__items-info-fullname">{user.fullName}</div>
                                    <div className="users__items-info-status">{user.status}</div>
                                    <div className="users__items-info-city">{user.location.city}</div>
                                    <div className="users__items-info-country">{user.location.country}</div>
                                </div>
                            </div>)
                    }
                </div>
                <nav className="users__footer-pagination">
                    <ul className="users__footer-list-number">
                        {
                            pages.map((page) => {
                                return (
                                    <li
                                        className={
                                            this.props.currentPage === page && 
                                            "users__footer-item active"
                                        }
                                        onClick={() => {
                                            this.onPageChanged(page);
                                        }}
                                    >
                                        {page}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Users;