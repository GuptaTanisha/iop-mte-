import React,{useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Bookscreen from './screens/Bookscreen.js';
import Contact from './screens/contact.js';
import Homescreen from './screens/Homescreen.js';
import SigninScreen from './screens/SiginScreen.js';
import Startscreen from './screens/Startscreen.js';
const App = () => {
    return(
<BrowserRouter>
    <div> 
    <Routes>
    <Route path="/" element={<Startscreen />} exact></Route>
    <Route path="/home" element={<Homescreen />}></Route>
    <Route path="/book" element={<Bookscreen />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/signin" element={<SigninScreen />}></Route>
        </Routes>
  </div>
  </BrowserRouter>
        )
}

export default App;