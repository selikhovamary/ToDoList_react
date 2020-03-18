import React, { useState } from 'react';
import './App.css';
import { createUseStyles } from 'react-jss'
import Item from './Item.tsx'


const useStyles = createUseStyles({
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    justifyContent: 'center',
  },
  app: {
    width: '60%',
    marginTop: '5%',
    overflow: 'hidden',
    '@media (max-width: 500px)': {
      width: '90%',
      marginTop: '15%',
    }
  },
  inputOut: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
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
    marginBottom: 10,
    padding: '5px 20px 5px 10px',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'baseline',
    position: 'relative',
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
  const [bg, setBg] = useState(JSON.parse(localStorage.getItem('bg')) || 'url(https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)')
  let checked;
  const [imp, setImp] = useState(false);

  const addItems = () => {
    if (!inputText) return;
    const checkTheSame = () => {
      const arr1 = arr.map(e => e.inputText.toLowerCase().trim())
      if (arr1.indexOf(inputText.toLowerCase().trim()) !== -1) { alert('Такой пункт уже есть (:'); return true }
      else return false;
    }
    if (checkTheSame()) return;
    const newArr = arr.concat({ inputText, checked, imp,  key: Math.random() });
    setArr(newArr);
    localStorage.setItem('items', JSON.stringify(newArr))
    setInputText('');
  }
  const editItem = (i) => {
    const newArr2 = arr.map(e => { if (e.inputText === i.target.nextSibling.innerHTML) {
      e.check = i.target.checked; 
    }
      return e });
    setArr(newArr2)
    localStorage.setItem('items', JSON.stringify(newArr2));
  }
  const setImportant = (i) => {
    const newArr2 = arr.map(e => {     
      if (e.inputText === i.target.offsetParent.offsetParent.innerText) {e.imp ? e.imp = !e.imp : e.imp = true; return e }
      else return e;
    });
      setArr(newArr2)
    localStorage.setItem('items', JSON.stringify(newArr2));
  }

  const back = (e) => {
    if (e.target.checked) {
      let bgVal = e.target.value === '1' ? 'url(https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' : (e.target.value === '2' ? 'url(https://images.unsplash.com/photo-1498190119503-7442dfa7eb4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2035&q=80)' : 'url(https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)');
      setBg(bgVal); localStorage.setItem('bg', JSON.stringify(bgVal))
    }
  }
const deleteItem = (i) => {
  const newArr2 = arr.filter(e => e.inputText !== i.target.offsetParent.offsetParent.innerText);
  setArr(newArr2)
  localStorage.setItem('items', JSON.stringify(newArr2));
}
const arr1 = arr.sort((a, b) => a.check < b.check ? -1 : 1)
const items = arr1.map((el) => { return <Item style={style.item} text={el.inputText} delItem={deleteItem} isChecked={editItem} isImportant = {setImportant} imp = {el.imp} checked={el.check} key={Math.random()} /> })


  return (
    <div className={style.content} style={{ backgroundImage: bg }}>
      <div style={{ position: "absolute", top: '1%', right: '5%' }}>
        <input type="radio" name='radio' className="radio" value='1' checked={bg == 'url(https://images.unsplash.com/photo-1526321839579-b73b23915824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'}
          onClick={back} />
        <input type="radio" name='radio' className="radio" value='2' checked={bg == 'url(https://images.unsplash.com/photo-1498190119503-7442dfa7eb4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2035&q=80)'}
          onClick={back} />
        <input type="radio" name='radio' className="radio" value='3' checked={bg == 'url(https://images.unsplash.com/photo-1513492365349-8ba97c199501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)'}
          onClick={back} />
      </div>
      <div className={style.app}>
        <h1 className={style.h1}>To Do List</h1>
        <div className={style.inputOut}><input value={inputText} className={style.input} type="text"
          onChange={(e) => { if (e.target.value != ' ') setInputText(e.target.value); else setInputText('') }} onKeyPress={(e) => { if (e.key === 'Enter') addItems() }} />
          <button className={style.button} onClick={addItems}>Add</button>
        </div>
        <div style={{ overflowY: 'overlay', maxHeight: '59%', marginRight: -19, paddingRight: 19, maxWidth: '120%', }}>{items}</div>
        {arr.length == 0 ? null : <button className={style.buttonCl} onClick={() => {
          localStorage.clear(); setArr([]);
        }}>Clear</button>}
      </div>
    </div>
  );
}

