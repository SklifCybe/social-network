import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 14},
        {id: 2, message: 'It\'s my first page', likesCount: 25},
    ];

    let postsElements = posts.map(post => 
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