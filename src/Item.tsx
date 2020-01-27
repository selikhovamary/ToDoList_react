import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

interface P {
style?: any,
text?: string,
check?: boolean,
onChange?: (e: any) => void,
}
export default function Item (p: P) {
    const[check, setCheck] = useState(false)
    return <div  className={p.style} key = {Math.random()} style = {check ? {backgroundColor: '#9ecebde0'} : {backgroundColor: '#ffffffde'}}>
        <input className="styled-checkbox" type="checkbox" checked = {check}  style ={{marginRight: -15}} onChange = {(e) => setCheck(e.target.checked)}/>
        <label style = {{overflow: 'hidden', textOverflow: 'ellipsis', height: 21.34}}>{p.text}</label>
        </div>
}