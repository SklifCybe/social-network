import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import classes from './Messenger.module.css';

const Messenger = () => {
    let dialogs = [
        { name: 'Ilya', id: '0' },
        { name: 'Evgeniy', id: '1' },
        { name: 'Ilyas', id: '2' },
        { name: 'Viktor', id: '3' },
        { name: 'Danik', id: '4' },
    ];

    let dialogsElements = dialogs
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

    let messages = [
        { id: '0', message: 'Hello' },
        { id: '1', message: 'How are you?' },
        { id: '2', message: 'Why did you leave me?' },
    ];

    let messagesElements = messages
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