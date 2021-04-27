import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} />
    );

    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;