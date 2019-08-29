import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Boards from '../components/Boards';
import StyledLanding from '../styles/Landing';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
        rel="stylesheet"
      />
      <style jsx global>
        {`
          html {
            font-size: 62.5%;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Head>

    <StyledLanding>
      <Navbar />
      <Hero />
      <Boards />
    </StyledLanding>
  </div>
);

export default Home;
