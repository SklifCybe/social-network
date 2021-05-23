import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = `/messages/${props.id}`;
    
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;