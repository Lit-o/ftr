import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bll simulation
let thoughtsData = [
    {id: 1, thought: "I'm awake. Let's go!"},
    {id: 2, thought: "Maybe do something?!!!!"},
    {id: 2, thought: "Maybe do something?!!!!"},
    {id: 3, thought: "I feel hungry. I should go to the grocery store or order a pizza"}
]

let thoughtsResult = thoughtsData.map((el) =>  <p id={el.id}>{el.thought}</p>)



ReactDOM.render(
  <React.StrictMode>
    <App data={thoughtsResult}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
