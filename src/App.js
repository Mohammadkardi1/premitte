import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './component/home/Home';
import Buy from './component/buy/Buy'
import Footer from './component/footer/Footer';


function App() {
  return (
    
    <BrowserRouter>
      <div className='mx-auto py-6 px-5 sm:px-8 md:px-10'>
        <Navbar/>
        <Routes>
          <Route path="/*" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
