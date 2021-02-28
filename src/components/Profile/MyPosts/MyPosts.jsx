import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <section className={classes.myPosts}>
            <h3>My posts:</h3>
            <div>
                <textarea></textarea>
                <button className={classes.btnSend}>Send</button>
            </div>
            
            <ul>
                <Post message='Hi, how are you?' likeCount='20' />
                <Post message="It's my second post" likeCount='15' />
            </ul>
        </section>
    );
};

export default MyPosts;