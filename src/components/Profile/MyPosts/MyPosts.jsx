import React from 'react';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => 
        <Post message={post.message} likesCount={post.likesCount} />);

    const addPost = () => {
        props.dispatch(addPostCreator());
        props.dispatch(updateNewPostTextCreator(''));
    };

    const onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextCreator(text));
    };  

    return (
        <section className={styles.postBlock}>
            <h3>My Posts:</h3>
            <div>
                <textarea  
                    value={props.newPostText} 
                    onChange={onPostChange}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </section>
    );
};

export default MyPosts;