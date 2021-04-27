import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogsItem.module.css';

const DialogsItem = (props) => {
    let path = `/messages/${props.id}`;
    
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;