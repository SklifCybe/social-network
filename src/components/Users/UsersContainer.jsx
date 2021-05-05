import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followCreator, unFollowCreator, setUsersCreator } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);