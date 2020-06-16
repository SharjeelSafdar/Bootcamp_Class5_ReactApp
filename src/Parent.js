import React from 'react';
import Child from './Child'

const Parent = () => (
    <div>
        Hello from Parent component.
        <Child />
        Back to Parent component.
    </div>
);

export default Parent;