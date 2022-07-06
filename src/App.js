/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';

function App() {
const [fato, setFato] = useState("")

function getFato() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(response => setFato(response.value))
  .catch((err) => console.log(err)
  )
  
}
  return (
    <div className="App">
        <header className='App-header'>
        <link rel="stylesheet" href="app.css"/>
        <img src="https://media0.giphy.com/media/13fR00PIYwb7Gg/giphy.gif" className="App-logo" alt="logo" />
        <h1>{fato}</h1>
                <button style={{
                  backgroundColor: 'grey'
                }}
                  onClick={() => {
                  getFato()
                  console.log(fato)
                }}>
                Novo fato
        </button>
        </header>
    </div>
  );
}

export default App;
