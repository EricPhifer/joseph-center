import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import bg from '../assets/images/bg.png';
// TODO: bring back the dynamic list
// import ProgramsTitleAndSlug from './NavPrograms';

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
    max-width: 170px;
    a {
      max-height: 80px;
      text-decoration: none;
      color: var(--white);
      display: grid;
      grid-template-columns: repeat(2, minmax(auto, 1fr));
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
    @media only screen and (max-width: 767px) {
      a .firstCol {
        height: 5rem;
      }
    }
    @media only screen and (min-width: 768px) {
      max-width: 215px;
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
    align-self: baseline;
    text-align: center;
    margin-top: 1.3rem;
    button {
      background-color: transparent;
      box-shadow: none;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--white);
      text-decoration: none;
      position: relative;
      cursor: pointer;
      &:hover {
        color: var(--darkgreen);
      }
      .dropdownBtn {
        a {
          text-align: center;
        }
        .show {
          display: block;
        }
      }
    }
    .dropdown {
      text-align: center;
      .menu {
        display: block;
        width: 12rem;
        padding: 1.2rem;
        margin: 0;
        background-color: var(--white);
        border: 1px solid var(--gold);
        list-style-type: none;
        line-height: 1.5;
        li a {
          color: var(--darkgreen);
          text-decoration: none;
          &:after {
            border-bottom: none;
          }
          &[aria-current='page'] {
            border-bottom: none;
          }
        }
      }
      .aboutMenu {
        -webkit-transform: translate(-27%, 0%);
        -ms-transform: translate(-27%, 0%);
        transform: translate(-27%, 0%);
      }
      .programsMenu {
        -webkit-transform: translate(-27%, 0%);
        -ms-transform: translate(-27%, 0%);
        transform: translate(-27%, 0%);
      }
    }
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
    border-radius: 5px;
    text-decoration: none;
    position: relative;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      background-color: var(--white);
      color: var(--darkgreen);
    }
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
    &[aria-current='page'] {
      background-color: var(--white);
      color: var(--darkgreen);
      &:hover {
        background-color: var(--darkgreen);
        color: var(--white);
      }
      &:hover:after {
        width: 0;
      }
    }
    @media only screen and (max-width: 768px) {
      padding: 0;
    }
  }
  /* setting the hamburger not to display by default */
  .mobileHamburger {
    width: 100%;
    height: auto;
    display: none;
    position: relative;
    text-align: center;
    list-style: none;
    overflow: hidden;
    .mobileNavLink {
      border-bottom: 1px dotted #ddd;
      button {
        display: block;
        padding: 0.5rem 0;
        text-decoration: none;
        color: var(--white);
        .dropdownBtn {
          display: none;
          a {
            text-align: center;
          }
        }
      }
    }
    .menu {
      max-height: 0;
    }
    ul {
      width: 100%;
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
      max-height: 100%;
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
  }
  @media only screen and (max-width: 767px) {
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
    .mobileNavLink {
      text-align: center;
      button {
        margin: auto;
        padding: 0;
        position: relative;
        background-color: transparent;
        color: var(--white);
        box-shadow: none;
        text-decoration: none;
        font-size: 2rem;
        cursor: pointer;
        .dropdownBtn {
          a {
            text-align: center;
          }
          .show {
            display: block;
          }
        }
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
      .mobileNavLink {
        button {
          font-size: 1.5rem;
        }
      }
      .buttonesque {
        background-color: var(--darkgreen);
        max-height: 100%;
        max-width: 100%;
        margin: 0 auto;
        color: var(--white);
        border-bottom: none;
        font-size: 1.5rem;
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
        word-break: break-all;
      }
    }
  }
`;

const UpArrow = styled(RiArrowDropUpLine)`
  color: var(--darkgreen);
  @media only screen and (max-width: 767px) {
    color: var(--white);
  }
`;

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
      showPrograms: false,
    };

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
    this.showPrograms = this.showPrograms.bind(this);
    this.closePrograms = this.closePrograms.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout() {
    this.setState({ showAbout: false }, () => {
      document.removeEventListener('click', this.closeAbout);
    });
  }

  showPrograms(event) {
    event.preventDefault();

    this.setState({ showPrograms: true }, () => {
      document.addEventListener('click', this.closePrograms);
    });
  }

  closePrograms() {
    this.setState({ showPrograms: false }, () => {
      document.removeEventListener('click', this.closePrograms);
    });
  }

  render() {
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
            <div className="dropdownContainer">
              <div label="About" className="dropdown">
                <button
                  type="button"
                  className="dropdownBtn"
                  onClick={this.showAbout}
                >
                  About
                </button>
                {this.state.showAbout ? (
                  <ul className="menu aboutMenu">
                    <button type="button" onClick={this.showAbout}>
                      <UpArrow />
                    </button>
                    <li>
                      <Link to="/our-story">Our Story</Link>
                    </li>
                    <li>
                      <Link to="/board">Board</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                  </ul>
                ) : null}
              </div>
              <span>
                {this.state.showAbout ? null : <RiArrowDropDownLine />}
              </span>
            </div>
          </div>
          <div className="navLink" id="programs">
            <div className="dropdownContainer">
              <div label="Programs" className="dropdown">
                <button
                  type="button"
                  className="dropdownBtn"
                  onClick={this.showPrograms}
                >
                  Programs
                </button>
                {this.state.showPrograms ? (
                  <ul className="menu programsMenu">
                    <button type="button" onClick={this.showAbout}>
                      <UpArrow />
                    </button>
                    <li>
                      <Link to="/programs/day-shelter">Day Shelter</Link>
                    </li>
                    <li>
                      <Link to="/programs/parent-advocacy">
                        Parent Advocacy
                      </Link>
                    </li>
                    <li>
                      <Link to="/programs/integrated-financial-services">
                        Financial Services
                      </Link>
                    </li>
                  </ul>
                ) : null}
                <span>
                  {this.state.showPrograms ? null : <RiArrowDropDownLine />}
                </span>
              </div>
            </div>
          </div>
          <div className="navLink" id="volunteer">
            <Link to="/volunteer">Volunteer</Link>
          </div>
          <div className="navLink" id="contact">
            <Link to="/contact">Contact</Link>
          </div>
          <Link
            to="/donate"
            role="button"
            className="navLink buttonesque"
            id="donate"
          >
            Donate
          </Link>
          <div className="mobileHamburger" id="burger">
            <input className="menuBtn" type="checkbox" id="menuBtn" />
            <label className="menuIcon" htmlFor="menuBtn">
              <span className="navicon" />
            </label>
            <ul className="menu">
              <li className="mobileNavLink" id="home">
                <Link to="/">Home</Link>
              </li>
              <li className="mobileNavLink" id="about">
                <div className="dropdownContainer">
                  <div label="About" className="dropdown">
                    <button
                      type="button"
                      className="dropdownBtn"
                      onClick={this.showAbout}
                    >
                      About
                    </button>
                    {this.state.showAbout ? (
                      <ul className=" aboutMenu">
                        <li>
                          <Link to="/our-story">Our Story</Link>
                        </li>
                        <li>
                          <Link to="/board">Board</Link>
                        </li>
                        <li>
                          <Link to="/testimonials">Testimonials</Link>
                        </li>
                        <button type="button" onClick={this.showAbout}>
                          <UpArrow />
                        </button>
                      </ul>
                    ) : null}
                  </div>
                  <span>
                    {this.state.showAbout ? null : <RiArrowDropDownLine />}
                  </span>
                </div>
              </li>
              <li className="mobileNavLink" id="programs">
                <div className="dropdownContainer">
                  <div label="Programs" className="dropdown">
                    <button
                      type="button"
                      className="dropdownBtn"
                      onClick={this.showPrograms}
                    >
                      Programs
                    </button>
                    {this.state.showPrograms ? (
                      <ul className=" programsMenu">
                        <li>
                          <Link to="/programs/day-shelter">Day Shelter</Link>
                        </li>
                        <li>
                          <Link to="/programs/parent-advocacy">
                            Parent Advocacy
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/integrated-financial-services">
                            Financial Services
                          </Link>
                        </li>
                        <button type="button" onClick={this.showPrograms}>
                          <UpArrow />
                        </button>
                      </ul>
                    ) : null}
                  </div>
                  <span>
                    {this.state.showPrograms ? null : <RiArrowDropDownLine />}
                  </span>
                </div>
              </li>
              <li className="mobileNavLink" id="volunteer">
                <Link to="/volunteer">Volunteer</Link>
              </li>
              <li className="mobileNavLink" id="contact">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  role="button"
                  className="mobileNavLink buttonesque"
                  id="donate"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </NavStyles>
    );
  }
}

export default Nav;
