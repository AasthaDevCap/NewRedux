import './App.css';
import React from 'react';
import Paraent from './Pareant';
import { createContext } from 'react';

const Mycontext=createContext();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mycontext.Provider value={"Hey Click ME"}>
       <Paraent/>
       </Mycontext.Provider>
      </header>
    </div>
  );
}

export default App;
export {Mycontext};
