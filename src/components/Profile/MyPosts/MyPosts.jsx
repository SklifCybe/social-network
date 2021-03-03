import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = props => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    let postsElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />);

    return (
        <section className={classes.myPosts}>
            <h3>My posts:</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button className={classes.btnSend} onClick={addPost}>Send</button>
            </div>
            <ul>
                { postsElements }
            </ul>
        </section>
    );
};

export default MyPosts;