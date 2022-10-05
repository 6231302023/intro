import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Error from "./Error";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>|
       
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;