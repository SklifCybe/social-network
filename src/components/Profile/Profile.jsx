import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

const Profile = props => {
    return (
        <main>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </main>
    );
};

export default Profile;