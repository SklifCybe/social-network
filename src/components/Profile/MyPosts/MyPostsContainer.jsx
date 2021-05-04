import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.updateNewPostText,
        posts: state.profilePage.posts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
            dispatch(updateNewPostTextCreator(''));
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;