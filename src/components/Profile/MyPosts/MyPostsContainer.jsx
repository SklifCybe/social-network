import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
    let store = props.store;

    const addPost = () => {
        store.dispatch(addPostCreator());
        store.dispatch(updateNewPostTextCreator(''));
    };

    const postChange = (text) => {
        store.dispatch(updateNewPostTextCreator(text));
    };  

    return (
        <MyPosts 
            addPost={addPost} 
            updateNewPostText={postChange} 
            newPostText={store.getState().profilePage.newPostText}
            posts={store.getState().profilePage.posts}/>
    );
};

export default MyPostsContainer;