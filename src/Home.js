import React from 'react';
import Header from './Header.js';
import {FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import './css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './Card.js';
import Data from './Data.js';
import About from './About.js';
import Services from './Services.js';
import Contact from './Contact.js';
import BlogJSON from './Blog.js';

const Home = () => {
  return (
    <>
  
<div className="container-fluid banner">

<div className="banner-content">
    <h1>CLIKTECH </h1>
    <p>" #1 WEB DEVELOPMENT COMPANY "</p>
    {/* <form class="form form-group">
        <input type="email" placeholder="E-mail Address" class="form-control" />
        <button class="btn btn-secondary">Submit</button>
    </form> */}
</div>
</div>

      {/* ABOUT----------------------------------- */}
      <About/>



      {/* SERVICES----------------------------------- */}
      <Services/>


      {/* BLOG----------------------------------- */}
      <BlogJSON/>



      {/* CONTACT----------------------------------- */}

     <Contact/>



      {/* CALL TO ACTION----------------------------------- */}

<div className="bot-div">
    <a target="_blank" href="tel:+919876543210">
        <div className="social-media" style={{backgroundColor:'#181d5e',borderRadius:'10px',color:'#fff',marginBottom:'10px'}}>
          {<FaPhoneAlt style={{color:'#fff'}}/>}
        </div>
    </a>

    <a target="_blank" href="https://wa.me/+919876543210">
    <div className="social-media " style={{backgroundColor:'#005600',borderRadius:'10px',color:'#fff',marginTop:'10px'}}>
         {<FaWhatsapp style={{color:'#fff',fontSize:'17px'}}/>}
      </div>
    </a>

</div>






    </>
  )
}

export default Home
