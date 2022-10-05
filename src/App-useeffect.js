// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import './App-fruits.css'




function App() {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [random, setRandom] = useState(0);
  const [user, setUser] = useState('Loading...');

  //1.Every web rendering
  // useEffect(() => {
  //   alert('update');
  // });

  //2. Only at first time (constructor)
  // useEffect(() => {
  //   // alert('useEffect');
  //   setRandom(Math.random());
  // }, []);

  //3.run at first render + run when the  Watch variable's change 
  // useEffect(()=>{
  //   alert('update');
  //     },[count]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if(response.ok){
      return response.json();
    }
    //response is not ok
    throw Error ('server denies access')
  })
  // .then(json => console.log(json.name))
  .then(json => setUser(json.name))
  .catch((err) => console.log(err))

  },[]);
  return (
    <div>
      {/* <h3>Random = {random}</h3> */}
      {user!=null && <h3>User = {user}</h3>}
      {user!=null ? <h3>User = {user}</h3> :<h3>Loading...</h3>}
      {/* <h3>Count = {count}</h3>
      <button onClick={() => setCount(count + 1)}>Updated 1</button>
      <h3>Count 2 = {count2}</h3>
      <button onClick={() => setCount2(count2 + 1)}>Updated 2</button> */}
    </div>

  );



}

export default App;
