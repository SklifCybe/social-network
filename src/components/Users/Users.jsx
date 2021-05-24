import React from 'react';
import { NavLink } from 'react-router-dom';

import Preloader from '../common/Preloader/Preloader';

import userPhoto from '../../assets/images/default-avatar.png';
import './users.scss';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) pages.push(i);

    return (
        <div className="users">
            <h2 className="users__title">Users</h2>
            { props.isFetching ?
                <Preloader /> :
                <div className="users__items">
                    {
                        props.users.map(user =>
                            <div key={user.id}>
                                <div className="users__items-item">
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img src={user.avatarUrl != null ? user.avatarUrl : userPhoto} className="users__avatar" alt="avatar" />
                                    </NavLink>
                                    <div className="users__btn-follow">
                                        {user.followed
                                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => props.follow(user.id)}>Follow</button>}
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
            }
            <nav className="users__footer-pagination">
                <ul className="users__footer-list-number">
                    {
                        pages.map((page) => {
                            return (
                                <li key={page}
                                    className={
                                        props.currentPage === page ? "users__footer-item active" : null
                                    }
                                    onClick={() => {
                                        props.onPageChanged(page);
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
    );
};

export default Users;