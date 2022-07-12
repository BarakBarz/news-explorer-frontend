import React from 'react';
import facebookIcon from '../../images/facebook-icon.svg';
import githubIcon from '../../images/github-icon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__heading'>{`© ${new Date().getFullYear()} Supersite, Powered by News API`}</h4>
      <div className='footer__links'>
        <a href='/' className='footer__link'>
          Home
        </a>
        <a href='/' className='footer__link'>
          Practicum by Yandex
        </a>
      </div>
      <div className='footer__icons'>
        <img
          className='footer__button'
          src={githubIcon}
          alt='github icon'></img>
        <img
          className='footer__button'
          src={facebookIcon}
          alt='facebook icon'></img>
      </div>
    </footer>
  );
}

export default Footer;

