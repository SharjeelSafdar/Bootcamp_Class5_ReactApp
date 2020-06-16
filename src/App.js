import React, { useReducer } from 'react';
import Parent from './Parent';
import './App.css';
import numberContext from './numberContext';
import number_reducer from './numberReducer';

function App() {
  const [state, dispatch] = useReducer(number_reducer, 66);
  return (
    <numberContext.Provider value={[state, dispatch]}>
      <div>
        Hello from App component.
        <Parent/>
        Back to App component.
        <br/>
        <button onClick={() => dispatch('INCREMENT')}>Increment</button>
        <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
        <button onClick={() => dispatch('SQUARE')}>Square</button>
        <button onClick={() => dispatch('SQUARE_ROOT')}>Square Root</button>
      </div>
    </numberContext.Provider>
  );
}

export default App;
