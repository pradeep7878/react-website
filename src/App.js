import './App.css';
import Header from './Header.js';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Error from './Error.js';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
