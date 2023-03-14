import React,{useState} from 'react';
import './App.css';
import { Routes ,Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Contact from "./components/Contact_us/contact.jsx";
import Service from "./components/Services/services.jsx";
import Footer from "./components/Footer/footer.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Login/signup.jsx";

function App() {
      // function for switching login page and register page
      const [currentForm, setCurrentForm] = useState('Login');
      const singup_page = () => setCurrentForm('signup');

      return (
            
            <>     
                 
             <Navbar />  
            <Routes>
                 
                  <Route exact path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/services' element={<Service />} />
                  <Route path='/Login' element={currentForm?<Login />:<Signup />} />
                  <Route path='/Signup' element={<Signup />} />
                 
            </Routes>
                  <Footer />

            </>
      );
}
export default App;
