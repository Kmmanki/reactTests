import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountComponent from './components/day1/CountComponent';
import CountHookComponent from './components/day1/CountHookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountHookComponent></CountHookComponent>
      </header>
    </div>
  );
}

export default App;
