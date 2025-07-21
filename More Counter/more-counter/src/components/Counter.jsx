import React from "react";

function Counter ({ count , setCounter}) {
  return (
    <div className="App">
        <h2>{count}
        </h2>
        <button onClick={() => setCounter(count - 1)}>  - </button>
       <button onClick={ () => setCounter(count +1)} > + </button>
    </div>
  )
}

export default Counter;