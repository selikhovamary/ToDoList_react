import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'
import Item from './Item.tsx'

const useStyles = createUseStyles({
  content: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    justifyContent: 'center',
  },
  app: {
    width: '60%',
    marginTop: '5%'
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
    marginRight: 10,
  },
  button: {
    minWidth: '20%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#dd714b',
    outline: 'none',
    letterSpacing: '4pt',
    fontWeight: '100',
  },
  buttonCl: {
    minWidth: '20%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#4f7683',
    outline: 'none',
    padding: 8,
    marginTop: 10,
    letterSpacing: '4pt',
    fontWeight: '100',
  },
  item: {
    backgroundColor: '#ffffffde',
    marginTop: 10,
    padding: '5px 20px 5px 10px',
    borderRadius: 10,
  },
  h1: {
    color: '#f3e8e8',
    textAlign: 'center',
    letterSpacing: '6pt',
    fontWeight: '100',
    marginBottom: 50,
  }
})

export default function ToDo() {
  const style = useStyles();
  const [inputText, setInputText] = useState('');
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [check, setCheck] = useState(false);
  // setArr(JSON.parse(localStorage.getItem('items')))
  const addItems = () => {
    debugger
    if (!inputText) return;
    const newArr = arr.concat({ inputText, check, key: Math.random() });
    setArr(newArr);
    localStorage.setItem('items', JSON.stringify(newArr))
    setInputText('');
    setCheck(false);
  }
  const items = arr.map((el) => { return <Item style={style.item} check={el.check} text={el.inputText} onChange={(e) => { setCheck(e.target.checked) }} /> })
  // const items = arr.map((el) => {return <div  className={style.item} checked = {el.check}><input type="checkbox" checked = {check}
  //   onChange = {(e) => {setCheck(e.target.checked); setArr(arr)}} style ={{marginRight: 10}}/>{el.inputText}</div>})
  return (
    <div className={style.content}>
      <div style = {{position: "absolute", top: '1%', right: '5%'}}>
        <input type="radio" name="radiobutton" className="radio" />
        <input type="radio" name="radiobutton" className="radio" />
        <input type="radio" name="radiobutton" className="radio" />
      </div>



      <div className={style.app}>
        <h1 className={style.h1}>To Do List</h1>
        <div className={style.inputOut}><input value={inputText} className={style.input} type="text"
          onChange={(e) => setInputText(e.target.value)} />
          <button className={style.button} onClick={addItems}>Add</button>
        </div>
        <div>{items}</div>
        {arr.length == 0 ? null : <button className={style.buttonCl} onClick={() => {
          localStorage.clear(); setArr([]);
        }}>Clear</button>}
      </div>
    </div>
  );
}

