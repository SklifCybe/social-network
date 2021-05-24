import React from 'react';

import Preloader from '../../common/Preloader/Preloader';
import './ProfileInfo.scss';
import defaultAvatar from '../../../assets/images/default-avatar.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <section className="profile-info">
            <section>
                <img src="https://clck.ru/UUbFQ" className="profile-info__background" alt="background"/>
            </section>
            <section className="profile-info__description">
                <img className="profile-info__avatar" src={props.profile.avatarUrl ? props.profile.avatarUrl : defaultAvatar} alt="avatar" />
                ava + description
            </section>
        </section>
    );
};

export default ProfileInfo;