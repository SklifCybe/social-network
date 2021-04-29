import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => 
        <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElements = React.createRef();

    const addPost = () => {
        props.dispatch( { type:'ADD-POST' } );
        props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: ''} );
    };

    const onPostChange = () => {
        let text = newPostElements.current.value;
        props.dispatch( { type: 'UPDATE-NEW-POST-TEXT', newText: text} );
    };  

    return (
        <section className={styles.postBlock}>
            <h3>My Posts:</h3>
            <div>
                <textarea 
                    ref={newPostElements} 
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