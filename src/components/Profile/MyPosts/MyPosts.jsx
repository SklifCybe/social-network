import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = props => {
    let postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />);

    return (
        <section className={classes.myPosts}>
            <h3>My posts:</h3>
            <div>
                <textarea></textarea>
                <button className={classes.btnSend}>Send</button>
            </div>
            <ul>
                { postsElements }
            </ul>
        </section>
    );
};

export default MyPosts;