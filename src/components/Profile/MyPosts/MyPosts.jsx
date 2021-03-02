import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let posts = [
        {id: '0', message: 'Hi, how are you?', likeCount: '20'},  
        {id: '1', message: 'It\'s my second post', likeCount: '15'} 
    ];

    let postsElements = posts
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