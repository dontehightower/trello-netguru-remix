import React from 'react';
import StyledClientSection from '../styles/ClientSection';
import Button from './Button';
import { H2, Copy } from '../styles/Typography';

const ClientSection = () => (
  <StyledClientSection>
    <H2 style={{ color: '#fff' }}>Our Clients</H2>
    <Copy style={{ color: '#fff', textAlign: 'center' }}>
      Companies of all shapes and sizes use Trello Business Class. Learn how Trello helps your team
      work smarter.
    </Copy>
    <form action="#" className="form">
      <H2 className="form__heading">Sign Up</H2>
      <fieldset className="form__field" style={{ gridArea: 'email', justifySelf: 'end' }}>
        <label htmlFor="email" className="form__field--label">
          <img className="form__field--icon" src="/static/envelope.svg" />
        </label>
        <input className="form__field--input" name="email" type="email" placeholder="Email" />
      </fieldset>
      <fieldset className="form__field" style={{ gridArea: 'password', justifySelf: 'start' }}>
        <label htmlFor="password" className="form__field--label">
          <img className="form__field--icon" src="/static/lock.svg" />
        </label>
        <input
          className="form__field--input"
          name="password"
          type="password"
          placeholder="Password"
        />
      </fieldset>
      <p className="agreement__text">
        By clicking Sign Up I agree to Trello's{' '}
        <span className="agreement__text--bold">Terms of Service</span> and{' '}
        <span className="agreement__text--bold">Privacy Policy</span>.
      </p>
      <Button className="form__button">Sign Up</Button>
    </form>
  </StyledClientSection>
);

export default ClientSection;
