import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Users from './Users';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}
    from '../../redux/users-reducer';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`http://localhost:3001/users?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data);
            })
            .finally(() => {
                this.props.toggleIsFetching(false);
            });
        axios.get('http://localhost:3001/totalUsers')
            .then(res => {
                this.props.setTotalUsersCount(res.data.count);
            })
            .finally(() => {
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        axios.get(`http://localhost:3001/users?_page=${page}&_limit=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data);
            })
            .finally(() => {
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
            />)
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIComponent);