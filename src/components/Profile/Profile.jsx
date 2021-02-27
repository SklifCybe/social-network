import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <main>
            <img className={classes.nature} src="https://clck.ru/TU522" alt='nature' />
            <section>
                <img className={classes.avatar} src="https://clck.ru/TSmqX" alt='avatar' />
            description
            </section>
            <MyPosts />
        </main>
    );
};

export default Profile;