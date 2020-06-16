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
        <h1>Using Redux with Context API</h1>
        Hello from App component.
        <Parent/>
        Back to App component.
      </div>
    </numberContext.Provider>
  );
}

export default App;
