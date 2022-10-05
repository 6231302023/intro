import { useState } from 'react';
import './App.css'


function App() {
  //JS variable
  // let count = 0;

  //React state variable
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  // const hello = () => {
  //   alert('Hello')
  // }

  // const hello2 = (name) => {
  //   alert(name);
  // }

  const increase = () => {
    // count++;
    // console.log(count);
    setCount(count + 1);
    if (count === 4) {
      setDisable(true);
    }

  }
  const reset =()=>{
    setCount(0);
    setDisable(false);
  }



  return (
    <>
      {/* <button onClick={hello}>Click</button>
      <button onClick={() => hello2("Peter")}>Click2</button> */}
      <h1>Counter = {count}</h1>
      <button onClick={increase} disabled={disable}>Click</button>
      <button onClick={reset}>Reset</button>

    </>

  );
}

export default App;
