const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push(
                {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                })
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
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