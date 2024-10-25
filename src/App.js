// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Main from './components/Main';
// import Bio from './components/Bio';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home'; // Assuming you have a Home component
// import Samratas from './components/Samratas';
import Practice from './components/Practice';



import './components/I18n'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Main><Home /></Main>} />
    //     <Route path="/bio" element={<Main><Bio /></Main>} />
    //     <Route path="/about" element={<Main><About /></Main>} />
    //     <Route path="/contact" element={<Main><Contact /></Main>} />
    //   </Routes>
    // </Router>
    <Practice />
  );
}

export default App;



// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "./components/Actions";

// function App(){

// const count = useSelector((state) => state);
// const dispatch =useDispatch()

//   return(
//     <>
//     <h1>Count:{count}</h1>
//     <button onClick={() => dispatch(increment())}>Increment</button>
//     <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </>
//   )
// }


// export default App;