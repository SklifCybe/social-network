import classes from './Post.module.css';

const Post = props => {
    return (
        <li>
            {props.message}
            <div>Like {props.likeCount}</div>
        </li>
    );
};

export default Post;