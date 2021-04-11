import React from 'react';
import {findCompositeOrPrime} from './utils';
import './FindCompositeOrPrimeStyle.css';

export default function FindCompositeOrPrimeStyle(props) {
    let data = findCompositeOrPrime(props.num)
    return <span className={data}> {data}</span>
  }