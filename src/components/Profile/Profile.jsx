import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts 
                posts={props.state.posts} 
                dispatch={props.dispatch}
                newPostText={props.newPostText}/>
        </div>
    );
};

export default Profile;