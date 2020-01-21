import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  content: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    width: '50%',
  },
  inputOut: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  input: {
    border: 'none',
    outline: 'none',
    borderRadius: 10,
    height: 35,
    width: '80%',
    boxSizing: 'border-box',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: '19%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#dd714b',
    outline: 'none',
  }
})

export default function ToDo() {
  const style = useStyles();
  const [inputText, setInputText] = useState('');
  const [arr, setArr] = useState([]);
  const addItems = () => {
    if (!inputText) return;
    const newArr = arr.concat({ inputText });
    setArr(newArr);
    setInputText('')
  }
const items = arr.map(e => {return <div key = {Math.random()}>{e.inputText}</div>})
  return (
    <div className={style.content}>
      <div className={style.app}>
        <div className={style.inputOut}><input value={inputText} className={style.input} type="text" onChange={(e) => setInputText(e.target.value)} />
          <button className={style.button} onClick={addItems}>Add</button>
        </div>
        <div>{items}</div>
      </div>
    </div>
  );
}

