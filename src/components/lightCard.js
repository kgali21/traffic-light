import React from 'react';
import styles from './lightCard.css'


const LightCard = ({ color }) => {
    return (
        <div className='circle' style={{ backgroundColor: color }} ></div>
    )
};

export default LightCard;