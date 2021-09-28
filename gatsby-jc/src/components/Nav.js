import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';
// import NavAccordion from './NavAccordion';

const NavStyles = styled.nav`
  position: fixed;
  height: 80px;
  width: 100vw;
  top: 0;
  left: 0;
  padding: 0.75rem 0;
  background-color: var(--gold);
  color: var(--white);
  z-index: 99;
  .twoPartLogo {
    a {
      text-decoration: none;
      display: grid;
      grid-template-columns: repeat(2, minmax(auto, 1fr));
      color: var(--white);
      .firstCol {
        width: 95px;
        height: 8rem;
        place-self: center;
      }
      .secondCol {
        width: 95px;
        align-self: center;
        justify-self: left;
        margin-left: -20px;
      }
    }
  }
  .navContainer {
    max-width: 1200px;
    margin: 0 auto;
    list-style: none;
    display: grid;
    grid-template-areas: 'logo . home about programs volunteer contact . donate';
    gap: 1rem;
  }
  .navLink {
    width: 7rem;
    text-align: center;
    place-self: center;
    a {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--white);
      text-decoration: none;
      &:hover {
        color: var(--darkgreen);
      }
      text-decoration: none;
      position: relative;
      &:after {
        content: '';
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--darkgreen);
        left: 50%;
        position: absolute;
        top: 110%;
        transition: all 0.2s ease-in-out;
        width: 0;
      }
      &:hover:after {
        left: 0;
        width: 100%;
      }
      &[aria-current='page'] {
        color: var(--darkgreen);
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--darkgreen);
        &:hover:after {
          width: 0;
        }
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
  #home {
    grid-area: home;
  }
  #about {
    grid-area: about;
  }
  #programs {
    grid-area: programs;
  }
  #volunteer {
    grid-area: volunteer;
  }
  #contact {
    grid-area: contact;
  }
  #donate {
    grid-area: donate;
  }
  .buttonesque {
    padding: 1rem 1.5rem;
    background-color: var(--darkgreen);
    color: var(--white);
    a {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--white);
      text-decoration: none;
      &[aria-current='page'] {
        color: var(--darkgreen);
        border-bottom: 2px solid var(--darkgreen);
        &:hover:after {
          width: 0;
        }
      }
    }
    &:hover {
      background-color: var(--white);
      a {
        color: var(--darkgreen);
      }
    }
    text-decoration: none;
    position: relative;
    &:after {
      content: '';
      padding-bottom: 0;
      border-bottom: 2px solid var(--darkgreen);
      left: 50%;
      position: absolute;
      top: 110%;
      transform: translateY(-5px);
      transition: all 0.2s ease-in-out;
      width: 0;
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
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
        <div className="twoPartLogo" id="logo">
          <Link to="/" className="twoColContainer">
            <div className="logo firstCol" />
            <span className="secondCol">The Joseph Center</span>
          </Link>
        </div>
        <div className="navLink" id="home">
          <Link to="/">Home</Link>
        </div>
        <div className="navLink" id="about">
          {/* <NavAccordion>
            <div label="About" className="accBoxLabel"> */}
          <Link to="/our-story">Our Story</Link>
          {/* <Link to="/board">Board</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </NavAccordion> */}
        </div>
        <div className="navLink" id="programs">
          <Link to="/programs">Programs</Link>
        </div>
        <div className="navLink" id="volunteer">
          <Link to="/volunteer">Volunteer</Link>
        </div>
        <div className="navLink" id="contact">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navLink buttonesque" id="donate">
          <Link to="/donate" role="button">
            Donate
          </Link>
        </div>
        <div className="mobileHamburger" id="burger">
          <input className="menuBtn" type="checkbox" id="menuBtn" />
          <label className="menuIcon" htmlFor="menuBtn">
            <span className="navicon" />
          </label>
          <ul className="menu">
            <li className="mobileNavLink" id="home">
              <Link to="/home">Home</Link>
            </li>
            <li className="mobileNavLink" id="about">
              {/* <NavAccordion>
                <div label="About" className="accBoxLabel"> */}
              <Link to="/our-story">Our Story</Link>
              {/* <Link to="/board">Board</Link>
                  <Link to="/testimonials">Testimonials</Link>
                </div> */}
              {/* </NavAccordion> */}
            </li>
            <li className="mobileNavLink" id="programs">
              <Link to="/programs">Programs</Link>
            </li>
            <li className="mobileNavLink" id="volunteer">
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li className="mobileNavLink" id="contact">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mobileNavLink buttonesque" id="donate">
              <Link to="/donate" role="button">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
}