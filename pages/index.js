import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import StyledLanding from '../styles/Landing';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <style jsx global>
        {`
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
    </StyledLanding>
  </div>
);

export default Home;
