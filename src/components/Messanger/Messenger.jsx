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
    return (
        <div className={classes.messenger}>
            <section className={classes.dialogs}>
                <Dialog name='Ilya' id='0' />
                <Dialog name='Evgeniy' id='1' />
                <Dialog name='Ilyas' id='2' />
                <Dialog name='Viktor' id='3' />
                <Dialog name='Danik' id='4' />
            </section>
            <section className='messages'>
                <Message message='hello' />
            </section>
        </div>
    );
};

export default Messenger;