const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: true };
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return { ...user, followed: false };
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
    }
    return state;
};

export const followCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;