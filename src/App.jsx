// src/App.jsx
import React from 'react';
import About from './pages/About.jsx';
{/*import Navbar from './components/Navbar.jsx'*/}
import Home from './pages/Home.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
       <Route path="/contact" element={<Contact/>} />
      </Routes>
         </BrowserRouter> 
       {/*}  <div>

        <Home/>
         <About/>
          <Service/>
        <Contact/>
   </div>*/}
    </>
    
  );
}

export default App;
