import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let postsData = [
        {id: '0', message: 'Hi, how are you?', likeCount: '20'},  
        {id: '1', message: 'It\'s my second post', likeCount: '15'} 
    ];

    return (
        <section className={classes.myPosts}>
            <h3>My posts:</h3>
            <div>
                <textarea></textarea>
                <button className={classes.btnSend}>Send</button>
            </div>
            
            <ul>
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
            </ul>
        </section>
    );
};

export default MyPosts;