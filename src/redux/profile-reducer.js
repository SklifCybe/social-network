const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 14 },
        { id: 2, message: 'It\'s my first page', likesCount: 25 },
        { id: 3, message: 'I think you gay', likesCount: 0 },
        { id: 4, message: 'If you can, you can, but if you can\'t, you can\'t', likesCount: 1 },
        { id: 5, message: 'I am a ghous hanter', likesCount: 5 },
        { id: 6, message: 'I play in dota, dota destroy my mind', likesCount: 101 },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 7, message: state.newPostText, likesCount: 0 }],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const addPostCreator = () => ({ type: ADD_POST, })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })

export default profileReducer;