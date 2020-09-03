import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hellooo Ram!!
        </p>
      </header>
      <Person age="27"></Person>
    </div>
  );
}

export default App;
