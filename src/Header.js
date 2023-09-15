import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    return (
        <>
            <section>
                    <header>
                        <Link to='/' className='logo'>LOGO</Link>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About us</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </header>
            </section>

        </>
    )
}

export default Header;