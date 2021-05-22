const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = ' SET_USERS_TOTAL_COUNT';

const initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
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
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
    }
    return state;
};

export const followCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowCreator = (userId) => ({ type: UNFOLLOW, userId });    
export const setUsersCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountCreator = (count) => ({ type: SET_USERS_TOTAL_COUNT, count});

export default usersReducer;