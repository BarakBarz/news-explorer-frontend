import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../images/facebook-icon.svg';
import githubIcon from '../../images/github-icon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h4 className='footer__heading'>{`© ${new Date().getFullYear()} Supersite, Powered by News API`}</h4>
      <div className='footer__links'>
        <Link to='/' className='footer__link'>
          Home
        </Link>
        <a
          rel='noreferrer'
          href='https://practicum.com/'
          className='footer__link'
          target='_blank'>
          Practicum by Yandex
        </a>
      </div>
      <div className='footer__icons'>
        <a
          rel='noreferrer'
          href='https://github.com/BarakB1991'
          className='footer__icon-link'
          target='_blank'>
          <img className='footer__button' src={githubIcon} alt='github icon' />
        </a>
        <a
          rel='noreferrer'
          href='https://facebook.com/106654715369878/'
          className='footer__icon-link'
          target='_blank'>
          <img
            className='footer__button'
            src={facebookIcon}
            alt='facebook icon'
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

