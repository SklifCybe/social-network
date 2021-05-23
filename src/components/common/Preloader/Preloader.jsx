import React from 'react'

import icon from '../../../assets/images/preloader.svg';

import './Preloader.scss';

const Preloader = () => {
    return (
        <div className="preload">
            <img src={icon} alt="loading" />
        </div>
    )
}

export default Preloader;
