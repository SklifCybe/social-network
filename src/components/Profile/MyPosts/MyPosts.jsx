import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <section>
            My posts:
            <ul>
                <Post />
            </ul>
        </section>
    );
};

export default MyPosts;