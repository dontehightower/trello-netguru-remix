import React from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Boards from '../components/Boards';
import Details from '../components/Details';
import Calendar from '../components/Calendar';
import ClientSection from '../components/ClientSection';
import Footer from '../components/Footer';
import StyledLanding from '../styles/Landing';

const GlobalStyles = createGlobalStyle`
 html {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Home = () => (
  <React.Fragment>
    <GlobalStyles />
    <div>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StyledLanding>
        <Navbar />
        <Hero />
        <Boards />
        <Details />
        <Calendar />
        <ClientSection />
        <Footer />
      </StyledLanding>
    </div>
  </React.Fragment>
);

export default Home;
