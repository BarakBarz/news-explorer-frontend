import React from 'react';
import authorPhoto from '../../images/portrait.svg';
import './About.css';

function About() {
  return (
    <section className='about'>
      <img
        src={authorPhoto}
        alt='Author'
        className='about__photo'
      />
      <div className='about__info'>
        <h3 className='about__header'>
          About the author
        </h3>
        <p className='about__description'>
          This block describes the project author.
          Here you should indicate your name, what
          you do, and which development
          technologies you know.
        </p>
        <p className='about__description'>
          You can also talk about your experience
          with Practicum, what you learned there,
          and how you can help potential
          customers.
        </p>
      </div>
    </section>
  );
}

export default About;
