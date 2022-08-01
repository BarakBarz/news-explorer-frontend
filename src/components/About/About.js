import React from 'react';
import authorPhoto from '../../images/portrait.svg';
import './About.css';

function About() {
  return (
    <section className='about'>
      <img src={authorPhoto} alt='Author' className='about__photo' />
      <div className='about__info'>
        <h3 className='about__header'>About the author</h3>

        <p className='about__description'>
          Hi, i'm Barak Barzilay but my friends call me Barak. I am a Web
          Developer that codes with MERN Stack tech, together with a good firm
          grasp of Vanilla JS, HTML and CSS. I love to solve problems, and help
          others become their better selves (another beautiful way to solve
          issues). I also love working in groups, because i feel that everything
          becomes more prolific, while working together towards one goal.
        </p>
        <p className='about__description'>
          I learned all this through Practicum Web Dev course. This Page here is
          my final project that incorporates everything i learned, together with
          site deployment. In Practicum's, nine months course, we sprinted
          through a lot of material. The course was simulated as a real job
          environment, including deadlines, in order to get a feel of working in
          a tech company.
        </p>
        <p className='about__description'>
          I am currently a senior student in practicum. This means that i am
          helping other students work out their bugs in the code, and generally
          giving out tips that's related to the theory they're currently working
          on. It also helps me stay on point, and learn even more.
        </p>
      </div>
    </section>
  );
}

export default About;
