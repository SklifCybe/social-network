import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => 
        <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <section className={styles.postBlock}>
            <h3>My Posts:</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </section>
    );
};

export default MyPosts;