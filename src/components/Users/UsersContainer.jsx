import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followCreator, 
        unFollowCreator, 
        setUsersCreator, 
        setCurrentPageCreator, 
        setUsersTotalCountCreator } 
from '../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountCreator(totalCount))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);