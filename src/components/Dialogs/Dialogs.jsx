import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    const onSendMessageClick = () => {
        props.sendMessageClick();
    }
    const onNewMessageChange = (event) => {
        props.newMessageChange(event.target.value);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogs.map(dialog =>
                    <DialogsItem name={dialog.name} id={dialog.id} />)
                }
            </div>
            <div className={styles.messages}>
                {props.messages.map(message => <Message message={message.message} />)}
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