import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFruits from "./App-Fruits";

import Add from "./add";
import Edit from "./edit";
function App() {
  return (
    <BrowserRouter>
    {/* <nav>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>|
       
      </nav> */}
    <Routes>
      <Route path="/" element={<AppFruits/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      {/* <Route path="*" element={<Error/>}/> */}
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;