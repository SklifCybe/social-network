import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';

import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/profile/1`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);