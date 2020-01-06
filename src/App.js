import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoopEx from './components/day3/LoopEx';
import ItemComponent from './components/day3/ItemComponent';
// import QuizComponent from './components/quiz/QuizComponent';

const arr1 = [
  { title: "quiz1", answer: "1" },
  { title: "quiz2", answer: "2" },
  { title: "quiz3", answer: "3" },
  { title: "quiz4", answer: "4" },
  { title: "quiz5", answer: "5" }
]
const arr2 = [
  { title: "zzquiz1", answer: "1" },
  { title: "zzquiz2", answer: "2" },
  { title: "zzquiz3", answer: "3" },
  { title: "zzquiz4", answer: "4" },
  { title: "zzquiz5", answer: "5" }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <QuizComponent arr={arr1}></QuizComponent>
        <QuizComponent arr={arr2}></QuizComponent> */}
        <ItemComponent></ItemComponent>
        <LoopEx></LoopEx>

      </header>
    </div>
  );
}

export default App;
