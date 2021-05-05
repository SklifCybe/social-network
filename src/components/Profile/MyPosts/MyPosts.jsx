import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => 
        <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (event) => {
        props.updateNewPostText(event.target.value);
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
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </section>
    );
};

export default MyPosts;