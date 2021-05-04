const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 14},
        {id: 2, message: 'It\'s my first page', likesCount: 25},
        {id: 3, message: 'I think you gay', likesCount: 0},
        {id: 4, message: 'If you can, you can, but if you can\'t, you can\'t', likesCount: 1},
        {id: 5, message: 'I am a ghous hanter', likesCount: 5},
        {id: 6, message: 'I play in dota, dota destroy my mind', likesCount: 101},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case ADD_POST:
            stateCopy.posts.push(
                {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                })
            break;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            break;
    }
    return stateCopy;
};

export const addPostCreator = () => (
    {
        type: ADD_POST,
    }
)
export const updateNewPostTextCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
)

export default profileReducer;