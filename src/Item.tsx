import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss';

interface P {
    style?: any,
    text?: string,
    checked?: boolean,
    isChecked?: (e: any) => void,
    isImportant?: (e: any) => void,
    delItem?: (e: any) => void,
    imp?: boolean,
}

export default function Item(p: P) {
    
    return <div className={p.style} key={Math.random()} style={p.checked ? ( p.imp ? { backgroundColor: '#9ecebde0', border: '2px solid red' } : { backgroundColor: '#9ecebde0', border: '2px solid #9ecebde0'} ) : ( p.imp ? { backgroundColor: '#ffffffde', border: '2px solid red'} : { backgroundColor: '#ffffffde', border: '2px solid white'})}>
        <input className="styled-checkbox" type="checkbox" checked={p.checked} style={{ marginRight: -15 }} onChange={p.isChecked} />
        <label style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 21.34, paddingRight:55 }}>{p.text}</label>
        <div style={{ display: 'flex', width: 60, justifyContent: 'space-between', position: 'absolute', right: 7, top: 4 }}>

            <div style={{ width: 25, cursor: 'pointer' }} onClick = {p.isImportant}><img src="https://image.flaticon.com/icons/svg/148/148768.svg" /></div>

            <div style={{ width: 25, cursor: 'pointer' }} onClick = {p.delItem}><img src="https://image.flaticon.com/icons/svg/148/148766.svg" /></div></div>
    </div>
}