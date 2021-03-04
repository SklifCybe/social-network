import React from 'react';
import classes from './Post.module.css';

const Post = props => {
    return (
        <li>
            {props.message}
            <div>Like {props.likesCount}</div>
        </li>
    );
};

export default Post;