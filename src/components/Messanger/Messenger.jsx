import { NavLink } from 'react-router-dom';
import classes from './Messenger.module.css';

const Dialog = props => {
    let path = `/messenger/${props.id}`;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    );
};

const Message = props => {
    return <div> {props.message} </div>
};

const Messenger = () => {
    let dialogsData = [
        {name: 'Ilya', id: '0'},
        {name: 'Evgeniy', id: '1'},
        {name: 'Ilyas', id: '2'},
        {name: 'Viktor', id: '3'},
        {name: 'Danik', id: '4'},
    ];

    let messengesData = [
        {id: '0', message: 'Hello'},
        {id: '1', message: 'How are you?'},
        {id: '2', message: 'Why did you leave me?'},
    ];

    return (
        <div className={classes.messenger}>
            <section className={classes.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
            </section>
            <section className='messages'>
                <Message message={messengesData[0].message} id={messengesData[0].id} />
                <Message message={messengesData[1].message} id={messengesData[1].id} />
                <Message message={messengesData[2].message} id={messengesData[2].id} />
            </section>
        </div>
    );
};

export default Messenger;