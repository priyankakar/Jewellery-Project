import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import About from '../Components/About/About';
// import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Header from '../Layout/Header';
import P_Category from '../product/P_Category/P_Category';
import Sub_Category from '../product/Sub_Category/Sub_Category';
import Contact from '../Components/Contact/Contact';

function Routing() {
    return (
       <Router>
           <Header />
           <Routes>
               <Route path="/" element={<Home/>} />

               <Route path="about_Page" element={<About/>} />

                <Route path="product_Page" element={<P_Category />} /> 

                <Route path="sub_category/:sid" element={<Sub_Category/>} />

                <Route path="contact" element={<Contact/>} />

           </Routes>
       </Router>
    )
}

export default Routing;