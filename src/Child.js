import React, {useContext} from 'react';
import numberContext from './numberContext';

const Child = () => {
    const value = useContext(numberContext);
    return (
        <div>
            Hello from Child component.
            <h1>Value: {value[0]}</h1>
            Exiting Child component.
        </div>
    );
}

export default Child;