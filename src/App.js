import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createUseStyles} from 'react-jss'
const style = createUseStyles({
  
})

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
добро пожаловать в реакт        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

