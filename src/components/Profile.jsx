import classes from './Profile.module.css';

const Profile = () => {
    return <main className={classes.content}>
        <img className={classes.nature} src="https://clck.ru/TU522" />
        <section>
            <img className={classes.avatar} src="https://clck.ru/TSmqX" />
        description
    </section>
        <section>
            My posts:
        <ul>
                <li>Hey, who nobody love me?</li>
                <li>Hey, who nobody love me?</li>
            </ul>
        </section>
    </main>
};

export default Profile;