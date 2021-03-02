import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import classes from './Messenger.module.css';

const Messenger = props => {
    let dialogsElements = props.dialogs
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messages
        .map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={classes.messenger}>
            <section className={classes.dialogs}>
                { dialogsElements }
            </section>
            <section className='messages'>
                { messagesElements }
            </section>
        </div>
    );
};

export default Messenger;