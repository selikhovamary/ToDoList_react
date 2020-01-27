import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

interface P {
style?: any,
text?: string,
onChange?: (e: any) => void,
}
export default function Item (p: P) {
    const[check, setCheck] = useState(false)
    return <div  className={p.style} key = {Math.random()} style = {check ? {backgroundColor: '#9ecebde0'} : {backgroundColor: '#ffffffde'}}>
        <input type="checkbox" checked = {check}  style ={{marginRight: 10}} onChange = {(e) => setCheck(e.target.checked)}/>
        <div style = {{overflow: 'hidden', textOverflow: 'ellipsis', height: 21.34}}>{p.text}</div>
        </div>
}