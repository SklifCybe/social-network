const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: 1,
            avatarUrl: 'https://clck.ru/UfhCk',
            fullName: 'Ilya Strelkovski',
            status: 'На случай если буду нужен, то я буду там же, где я был, когда был не нужен',
            followed: false,
            location: { city: 'Vitebsk', contry: 'Belarus' }
        },
        {
            id: 2,
            avatarUrl: 'https://clck.ru/UfhDb',
            fullName: 'Evgeniy Fedosenko',
            status: 'Если волк молчит, значит лучше его не перебивать',
            followed: true,
            location: { city: 'Orsha', contry: 'Belarus' }
        },
        {
            id: 3,
            avatarUrl: 'https://clck.ru/UfhEQ',
            fullName: 'Ilya Khajmurzaev',
            status: 'Легко вставать, когда ты не ложился',
            followed: false,
            location: { city: 'Grozny', contry: 'Chechny' }
        },
    ],
}

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
            return { ...state, users: [...state.users, ...action.users] };
    }
    return state;
};

export const followCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;