import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';

function App() {
  const [number, set_number] = useState(35);
  return (
    <div>
      <Parent value={number}/>
      <button onClick={() => set_number(number+1)}>Increment</button>
      <button onClick={() => set_number(number-1)}>Decrement</button>
    </div>
  );
}

export default App;
