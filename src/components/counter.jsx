import React, { useState }  from 'react'

const Counter = function (){
    const [counter, setCounter] = useState(0);
    function increment() {
      setCounter(counter + 1);
    }
    function decrement() {
      setCounter(counter - 1);
    }
    return (
      <div>
        <p>{counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      
      </div>
    );
  
}
export default Counter