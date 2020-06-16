import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import numberContext from './numberContext';

function App() {
  const [number, set_number] = useState(33);
  return (
    <numberContext.Provider value={number}>
      <div>
        Hello from App component.
        <Parent value={number}/>
        Back to App component.
        <br/>
        <button onClick={() => set_number(number+1)}>Increment</button>
        <button onClick={() => set_number(number-1)}>Decrement</button>
      </div>
    </numberContext.Provider>
  );
}

export default App;
