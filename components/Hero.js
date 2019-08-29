import React from 'react';
import Button from './Button';
import StyledHero from '../styles/Hero';

const Hero = () => (
  <StyledHero>
    <h1 className="hero__heading-primary">
      Trello lets you work more collaboratively and get more done.
    </h1>
    <p className="hero__tagline">
      Trello's boards, lists and cards enable you to organize and prioritize your projects in a fun,
      flexiblem and rewarding way.
    </p>
    <Button>Sign Up for Free</Button>
  </StyledHero>
);

export default Hero;
