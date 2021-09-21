import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';

const NavStyles = styled.nav`
  position: fixed;
  height: 80px;
  width: 100vw;
  top: 0;
  left: 0;
  padding: 0.75rem 0;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  z-index: 99;
  .navContainer {
    margin: 0 2rem;
    list-style: none;
    display: grid;
    grid-template-areas: 'logo . . . . . . . page1 page2 page3 contact';
    gap: 1rem;
  }
  .navLink {
    place-self: start right;
    margin-top: 0.75rem;
    &:hover {
      transform: translateY(8px);
    }
    transition: transform 0.4s ease-in-out;
    a {
      color: #ffffff;
      margin-top: 2rem;
      font-size: 1.55rem;
      text-decoration: none;
      position: relative;
      &[aria-current='page'] {
        color: var(--blue);
      }
    }
  }
  .logo {
    width: 15rem;
    height: 7rem;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  #logo {
    grid-area: logo;
  }
  #page1 {
    grid-area: page1;
  }
  #page2 {
    grid-area: page2;
  }
  #page3 {
    grid-area: page3;
  }
  #contact {
    grid-area: contact;
  }
  /* setting the hamburger not to display by default */
  .mobileHamburger {
    width: 100%;
    display: none;
    position: relative;
    text-align: center;
    list-style: none;
    overflow: hidden;
    ul {
      width: 100%;
      max-height: 0;
      margin: 7px 0 0 0;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.6);
      clear: both;
      transition: max-height 0.2s ease-out;
      li a {
        border-bottom: 1px dotted #ddd;
        text-decoration: none;
        display: block;
        color: #fff;
        text-decoration: none;
      }
    }

    li a:hover,
    .menuBtn:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    /* menu icon */
    .menuIcon {
      display: inline-block;
      padding: 28px 20px;
      position: relative;
      cursor: pointer;
      user-select: none;
    }
    .menuIcon .navicon {
      height: 2px;
      width: 18px;
      display: block;
      position: relative;
      background: #fff;
      transition: background 0.2s ease-out;
    }
    .menuIcon .navicon:before,
    .menuIcon .navicon:after {
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      background: #fff;
      content: '';
      transition: all 0.2s ease-out;
    }
    .menuIcon .navicon:before {
      top: 5px;
    }
    .menuIcon .navicon:after {
      top: -5px;
    }

    /* menu btn */
    .menuBtn {
      display: none;
    }
    .menuBtn:checked ~ .menu {
      max-height: 340px;
    }
    .menuBtn:checked ~ .menuIcon .navicon {
      background: transparent;
    }
    .menuBtn:checked ~ .menuIcon .navicon:before {
      transform: rotate(-45deg);
    }
    .menuBtn:checked ~ .menuIcon .navicon:after {
      transform: rotate(45deg);
    }
    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:before,
    .menuBtn:checked ~ .menuIcon:not(.steps) .navicon:after {
      top: 0;
    }

    /* Responsive */
    @media only screen and (min-width: 768px) {
      height: 50px;
      .mobileHamburger {
        background: rgba(0, 0, 0, 0.6);
        height: 55px;
        line-height: 55px;
        width: 100%;
      }
      li a {
        color: #fff;
        padding: 0px 30px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
      .menu {
        max-height: none;
      }
      .menuIcon {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    ul {
      gap: 0.5rem;
    }
    a {
      font-size: 1.75rem;
    }
  }
  @media only screen and (max-width: 768px) {
    height: 50px;
    .navContainer {
      margin: 0 0.5rem;
      padding: 0;
      gap: 0;
      grid-template-areas: 'logo burger';
    }
    .mobileHamburger {
      display: block;
      float: right;
      text-align: right;
      #burger {
        grid-area: burger;
      }
      ul li a {
        padding: 15px;
        text-align: center;
      }
    }
    .navLink {
      display: none;
    }
    .logo {
      width: 9.8rem;
      height: 5rem;
    }
  }
  @media only screen and (max-width: 400px) {
    height: 50px;
    .navContainer {
      margin: 0 0.5rem;
      padding: 0;
      gap: 0;
      grid-template-areas: 'logo burger';
    }
    /* displaying hamburger for screens 400px wide & smaller */
    .mobileHamburger {
      display: block;
      float: right;
      text-align: right;
      #burger {
        grid-area: burger;
      }
      ul li a {
        padding: 15px;
        text-align: center;
      }
    }
    .logo {
      width: 9.8rem;
      height: 5rem;
      margin: 0;
    }
    ul {
      gap: 0;
      line-height: 0.9;
    }
    a {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 349px) {
    ul {
      gap: 0;
      li a {
        padding: 10px;
        font-size: 0.95rem;
        word-break: break-all;
      }
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <div className="navContainer">
        <div id="logo">
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>
        <div className="navLink" id="page1">
          <Link to="/page1">Page One</Link>
        </div>
        <div className="navLink" id="page2">
          <Link to="/page2">Page Two</Link>
        </div>
        <div className="navLink" id="page3">
          <Link to="/page3">Page Three</Link>
        </div>
        <div className="navLink" id="contact">
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="mobileHamburger" id="burger">
          <input className="menuBtn" type="checkbox" id="menuBtn" />
          <label className="menuIcon" htmlFor="menuBtn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li className="mobileNavLink" id="page1">
              <Link to="/page1">Page One</Link>
            </li>
            <li className="mobileNavLink" id="page2">
              <Link to="/page2">Page Two</Link>
            </li>
            <li className="mobileNavLink" id="page3">
              <Link to="/page3">Page Three</Link>
            </li>
            <li className="mobileNavLink" id="contact">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
}
