import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import LocationLogo from '../Footer/Image/location.png'
import TelLogo from '../Footer/Image/telephone.png'
import MailLogo from '../Footer/Image/email.png'

function Footer() {
  return (<>
    <footer className='footer bg-black  px-4 py-2 d-flex justify-content-between align-items-center flex-wrap'>

    <div className='text-white m-4 '>
        <h5><b><i>Join Decor Vista Family</i></b></h5>
        <p className=''>Enjoy member-only discounts & offers, early access<br/> to decor vista sale, delicious food offers and much more.</p>
        <Link to="https://www.linkedin.com/in/shriya-borkar-15465122b/"className='links text-decoration-none text-white'><img src='https://cdn-icons-png.flaticon.com/128/4494/4494497.png' className='logo'/></Link>
        <Link to="https://github.com/shriyaborkar358"className='links text-decoration-none text-white'><img src='https://cdn-icons-png.flaticon.com/128/5968/5968866.png'  className='logo-2'/></Link>
        <Link to="https://github.com/shriyaborkar358"className='links text-decoration-none text-white'><img src='https://cdn-icons-png.flaticon.com/128/15707/15707749.png'  className='logo'/></Link>
        <Link to="/about"className='links text-decoration-none text-white'><img src='https://cdn-icons-png.flaticon.com/128/15707/15707737.png'  className='logo'/></Link>
      </div>

      <div className='text-white  p-4 '>
        <h5><b>Quick Links</b></h5>
        <Link to="/" className='links text-decoration-none text-white'><p>Home</p></Link>
        <Link to="/category"className='links text-decoration-none text-white'><p>Category</p></Link>
        <Link to="/blog"className='links text-decoration-none text-white'><p>Blog</p></Link>
        <Link to="/about"className='links text-decoration-none text-white'><p>About</p></Link>
        <Link to="/about"className='links text-decoration-none text-white'><p>Contact</p></Link>
      </div>

    </footer>
    
  </>)
}

export default Footer