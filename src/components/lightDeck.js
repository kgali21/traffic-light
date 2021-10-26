import React, { useState, useEffect } from 'react';
import LightCard from './lightCard.js';
import styles from './lightDeck.css';

const LightDeck = () => {
    const colorData = ['red', 'yellow','green']

    const [lit, setLit] = useState('red')

    const handleClick = () => {
        if(lit === 'red') {
            setLit('yellow');
        }
        if(lit === 'yellow'){
            setLit('green')
        } 
        if(lit === 'green'){
            setLit('red')
        }
    }

    const lightElement = colorData.map(newColorData => (
        <li>
            <LightCard color={newColorData === lit ? lit : 'grey'} /> 
        </li>
    ));

    return (
        <ul className='lightList' onClick={handleClick}>
            {lightElement}
        </ul>
    )
}

export default LightDeck;
