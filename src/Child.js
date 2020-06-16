import React, {useContext} from 'react';
import numberContext from './numberContext';

const Child = () => {
    const [value, dispatch] = useContext(numberContext);
    return (
        <div>
            Hello from Child component.
            <h2>Value: {value}</h2>
            <button onClick={() => dispatch('INCREMENT')}>Increment</button>
            <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => dispatch('SQUARE')}>Square</button>
            <button onClick={() => dispatch('SQUARE_ROOT')}>Square Root</button>
            <br/>
            Exiting Child component.
        </div>
    );
}

export default Child;