import React, { useState } from 'react';
import './App.css';
import numberContext from './numberContext';
import Parent from './Parent';

function App() {
  const [number, set_number] = useState(22);
  return (
    <numberContext.Provider value={number}>
      <div>
        Hello from App component.
        <Parent></Parent>
        Back to App component.
        <br/>
        <button onClick={() => set_number(number+1)}>Increment</button>
        <button onClick={() => set_number(number-1)}>Decrement</button>
      </div>
    </numberContext.Provider>
  );
}

export default App;
