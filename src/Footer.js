import React from 'react';
import {FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
              {/* FOOTER----------------------------------- */}

<section>
    <div className="container-fluid">
        <footer>
            <p> ClikTech &copy; 2023 || All Rights Reserved</p>
            <div className='footer-icons'>
            <a href="https://facebook.com">
              {<FaFacebook className='icon facebook'/>}
            </a>
            <a href="https://instagram.com">
              {<FaInstagram className='icon instagram'/>}
            </a>
            <a href="https://twitter.com">
              {<FaTwitter className='icon twitter'/>}
            </a>
            </div>
        </footer>
    </div>
</section>
    </div>
  )
}

export default Footer
