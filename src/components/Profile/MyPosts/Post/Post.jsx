import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <article>
            <img src="https://clck.ru/UUmcs" className={styles.avatar}/>
            <span>{props.message}</span>
            <span className={styles.like}>Like {props.likesCount}</span>
        </article>
    );
};

export default Post;