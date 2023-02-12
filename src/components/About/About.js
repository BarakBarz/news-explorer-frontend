import React from 'react';
import authorPhoto from '../../images/portrait.jpg';
import './About.css';

function About() {
  return (
    <section className='about'>
      <img src={authorPhoto} alt='Author' className='about__photo' />
      <div className='about__info'>
        <h3 className='about__header'>About the author</h3>

        <p className='about__description'>
          Hi, i'm Barak Barzilay, Web Developer. With a found passion for
          development, imaginative thinking, and a strong team orientation, I am
          confident in my ability to make a positive impact on any development
          project. I bring a positive mindset to every endeavor and firmly
          believe in the benefits of collaboration, including fresh
          perspectives, new ideas, and efficient problem-solving. I am eager to
          bring my skills to a dynamic team environment.
        </p>
        <p className='about__description'>
          I learned all this through Masterschool and practicum's Web Dev
          course. This web application here is my final project that
          incorporates everything i've learned, together with site deployment.
          In the nine months course, we sprinted through a lot of material. The
          course was simulated in agile methodology, in order to get a feel of
          working in a tech company.
        </p>
        <p className='about__description'>
          I am currently learning more tech and how to implement it better and
          staying up at night in bed thinking about bugs. 🪲
        </p>
      </div>
    </section>
  );
}

export default About;
