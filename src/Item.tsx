import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

interface P {
style?: any,
text?: string,
checked?: boolean,
isChecked?: (e: any) => void,
}
export default function Item (p: P) {
    return <div  className={p.style} key = {Math.random()} style = {p.checked ? {backgroundColor: '#9ecebde0'} : {backgroundColor: '#ffffffde'}}>
        <input className="styled-checkbox" type="checkbox" checked = {p.checked}  style ={{marginRight: -15}} onChange = {p.isChecked}/>
        <label style = {{overflow: 'hidden', textOverflow: 'ellipsis', height: 21.34}}>{p.text}</label>
        <div style ={{display: 'flex', width: '11%', justifyContent: 'space-between', position: 'absolute', right: 7, top: 5}}><div style = {{width: '45%', cursor: 'pointer'}}><img src="https://image.flaticon.com/icons/svg/148/148768.svg"/></div>
        <div style = {{width: '45%', cursor: 'pointer'}}><img src="https://image.flaticon.com/icons/svg/148/148766.svg"/></div></div>
        </div>
}