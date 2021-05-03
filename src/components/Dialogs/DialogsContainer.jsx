import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
    let store = props.store;

    const sendMessageClick = () => {
        store.dispatch(sendMessageCreator());
        store.dispatch(updateNewMessageBodyCreator(''));
    }
    const newMessageChange = (text) => {
        store.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <Dialogs 
            sendMessageClick={sendMessageClick} 
            newMessageChange={newMessageChange}
            newMessageText={store.getState().dialogsPage.newMessageText}
            messages={store.getState().dialogsPage.messages}
            dialogs={store.getState().dialogsPage.dialogs}/>
    );
};

export default DialogsContainer;