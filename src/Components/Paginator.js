import React from 'react';
import './FindCompositeOrPrimeStyle.css';

export default function Paginator(props) {
    return <>
        <button disabled={props.disabledPrev} onClick={() => props.setActionData(-10)}>Prev 10</button>
        <button disabled={props.disabledNext} onClick={() => props.setActionData(10)}>Next 10</button>
    </>
}