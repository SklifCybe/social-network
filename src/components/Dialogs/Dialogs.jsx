import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = `/messages/${props.id}`;
    
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>
};

const Dialogs = () => {
    let dialogs = [
        { id: 0, name: 'Ilya' },
        { id: 1, name: 'Evgeniy' },
        { id: 2, name: 'Nikita' },
        { id: 3, name: 'Danik' },
        { id: 4, name: 'Viktor' },
        { id: 5, name: 'Ilyas' },
    ];

    let messages = [
        { id: 0, message: 'Hello' },
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Yo' },
    ];

    let dialogsElements = dialogs.map(dialog => 
        <DialogsItem name={dialog.name} id={dialog.id} /> 
    );

    let messagesElements = messages.map(message => <Message message={message.message} />);
    

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