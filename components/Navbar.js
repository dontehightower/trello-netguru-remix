import React from 'react';
import Link from 'next/link';
import StyledNavbar from '../styles/Navbar';

const Navbar = () => (
  <StyledNavbar>
    <img
      className="header__logo"
      src="https://res.cloudinary.com/dolkj0n9t/image/upload/v1567056407/trello-netguru-remix/trello-logo-white.png"
      alt="Trello Logo White"
    />

    <nav>
      <ul className="header__list">
        <li>
          <Link href="#">
            <a className="header__list--link">Tour</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="header__list--link">Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className="header__list--link">Learn</a>
          </Link>
        </li>
      </ul>
    </nav>

    <div>
      <Link href="/login">
        <a className="header__cta--secondary">Login</a>
      </Link>
      <Link href="/register">
        <a className="header__cta--primary">Sign up</a>
      </Link>
    </div>
  </StyledNavbar>
);

export default Navbar;
