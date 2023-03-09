import React from 'react';
import './App.css';
import { Routes ,Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Contact from "./components/Contact_us/contact.jsx";
import Service from "./components/Services/services.jsx";
import Footer from "./components/Footer/footer.jsx";
function App() {
      return (
            <>          
             <Navbar />  
            <Routes>
                 
                  <Route exact path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/services' element={<Service/>} />
                 
            </Routes>
                  <Footer />

            </>
      );
}
export default App;
