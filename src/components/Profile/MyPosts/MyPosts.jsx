import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <section>
            My Posts:
            <div>
                New post
            </div>
            <textarea></textarea>
            <button>Add Post</button>
            <Post message="It's my first post" likesCount="25"/>
            <Post message="It's my second post" likesCount="15"/>
        </section>
    );
};

export default MyPosts;