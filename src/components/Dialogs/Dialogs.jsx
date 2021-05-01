import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} />
    );
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
        props.dispatch(updateNewMessageBodyCreator(''));
    }
    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea
                    onChange={onNewMessageChange}
                    placeholder="Enter your message"
                    value={props.newMessageText}>
                </textarea>
                <button onClick={onSendMessageClick} className={styles.btnSend}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;