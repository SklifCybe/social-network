import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <article>
            <img src="https://clck.ru/UXrxd" className={styles.avatar} alt="avatar"/>
            <span>{props.message}</span>
            <span className={styles.like}>Like {props.likesCount}</span>
        </article>
    );
};

export default Post;