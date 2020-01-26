import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

interface P {
style?: any,
check?: boolean,
text?: string,
onChange?: (e: any) => void,
}
export default function Item (p: P) {
    return <div  className={p.style}>
        <input type="checkbox" checked = {p.check}  style ={{marginRight: 10}} onChange = {p.onChange}/>
        <div style = {{overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.text}</div>
        </div>
}