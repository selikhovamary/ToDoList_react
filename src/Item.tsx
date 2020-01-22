import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

interface P {
style?: any,
check?: boolean,
text?: string,
onChange?: () => void,
}
export default function Item (p: P) {
    return <div  className={p.style}>
        <input type="checkbox" checked = {p.check}  style ={{marginRight: 10}} onChange = {p.onChange}/>
        {p.text}
        </div>
}