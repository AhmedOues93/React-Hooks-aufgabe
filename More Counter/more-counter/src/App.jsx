import { useState } from 'react'
import Counter from "./components/Counter";
import reactLogo from './assets/react.svg'
import './App.css'

function App () {


  const [ count1 , setCounter1] = useState(0);
  const [ count2 , setCounter2] = useState(0);
   const [ count3 , setCounter3] = useState(0);

   return (
     <div className='app-container'>
      <h1>MULTI COUNTER</h1>
    <div className='counter-wrapper'>
      <Counter count={count1} setCounter={setCounter1}/>
      <Counter count={count2} setCounter={setCounter2} />
      <Counter count={count3} setCounter={setCounter3} />
    </div>
    </div>
   );
  


}

export default App;



