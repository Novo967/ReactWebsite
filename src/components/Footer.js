import React from 'react'
import {Button} from './Button'
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link>How it works</Link>
                <Link>Our vision</Link>
                <Link>Who we are</Link>
                <Link>Support us</Link>
            </div>
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link>How it works</Link>
                <Link>Our vision</Link>
                <Link>Who we are</Link>
                <Link>Support us</Link>
            </div>
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About us</h2>
                <Link>How it works</Link>
                <Link>Our vision</Link>
                <Link>Who we are</Link>
                <Link>Support us</Link>
            </div>
            <div className="footer-link-items">
                <h2>Social media</h2>
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Twitter</Link>
                <Link>Tiktok</Link>
            </div>
        </div>
      </div>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join to our comunity
        </p>
        <p className="footer-subscription-text">
            Its for free!
        </p>
        <div className="input-areas">
            <form>
                <input type="email" name="email" placeholder="your email" className="footer-input" />
                <Button buttonStyle='btn--outline'>Sign up</Button>
            </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              Close2Home  <i className="fa-solid fa-shop"></i>
            </Link>
          </div>
          <small className="website-rights">© 2025</small>
          <div className="social-icons">
            <Link className="social-icon-link"
            to='/' target="_blank" aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
            to='/' target="_blank" aria-label='instagram'>
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link twitter"
            to='/' target="_blank" aria-label='Twitter'>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon-link tiktok"
            to='/' target="_blank" aria-label='Tiktok'>
              <i className="fab fa-tiktok"></i>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Footer
