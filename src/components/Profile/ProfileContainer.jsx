import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1;
        }

        axios.get(`http://localhost:3001/profile/${userId}`)
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));