import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss';

interface P {
    style?: any,
    text?: string,
    checked?: boolean,
    isChecked?: (e: any) => void,
    isImportant?: boolean,
}
const UseStyles = createUseStyles( { 
    important: {
        border: (o: any) => o.imp ? '2px solid red' : 'none',
        boxSizing: 'border-box',
        }
    },
)
debugger
export default function Item(p: P) {
    const [imp, setImp] = useState(p.isImportant)
    const style = UseStyles({imp});
    debugger
    return <div className={p.style + ' ' + style.important} key={Math.random()} style={p.checked ? { backgroundColor: '#9ecebde0'} : { backgroundColor: '#ffffffde'}}>
        <input className="styled-checkbox" type="checkbox" checked={p.checked} style={{ marginRight: -15 }} onChange={p.isChecked} />
        <label style={{ overflow: 'hidden', textOverflow: 'ellipsis', height: 21.34 }}>{p.text}</label>
        <div style={{ display: 'flex', width: 65, justifyContent: 'space-between', position: 'absolute', right: 7, top: 4 }}>

            <div style={{ width: 25, cursor: 'pointer' }} onClick = {() =>{setImp(!imp)}}><img src="https://image.flaticon.com/icons/svg/148/148768.svg" /></div>

            <div style={{ width: 25, cursor: 'pointer' }}><img src="https://image.flaticon.com/icons/svg/148/148766.svg" /></div></div>
    </div>
}