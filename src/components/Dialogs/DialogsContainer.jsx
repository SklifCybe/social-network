import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageCreator());
            dispatch(updateNewMessageBodyCreator(''));
        },
        newMessageChange: (text) => {
            dispatch(updateNewMessageBodyCreator(text));
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;