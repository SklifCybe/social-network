import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3001/auth`)
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {userId, email, login} = res.data.data;
                    this.props.setAuthUserData(userId, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);