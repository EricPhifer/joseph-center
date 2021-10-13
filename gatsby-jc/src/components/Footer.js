import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import bg from '../assets/images/bg.png';

const PreFooterStyles = styled.div`
  background-color: var(--gold);
  width: 100%;
  ul {
    list-style-type: none;
  }
  // Three Column Grid
  .threeColContainer {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
    place-content: center;
    @media only screen and (max-width: 509px) {
      grid-template-columns: minmax(auto, 1fr);
      .threeCol {
        margin: -10px auto;
      }
    }
  }
  .logo {
    width: 15rem;
    height: 15rem;
    margin: auto;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .threeCol {
    margin: auto;
    text-align: center;
    a {
      text-decoration: none;
    }
    ul {
      padding: 0;
    }
    .donateSocialMedia {
      li {
        height: auto;
        margin: 4rem 0;
        .socialMediaF {
          margin-top: 5rem;
          padding: 1px 11px;
          background-color: var(--white);
          color: var(--blue);
          border: 4px solid var(--blue);
          border-radius: 5rem;
        }
      }
    }
    .importantLinks {
      li {
        margin: 1.5rem 0;
      }
    }
  }
  .buttonesque {
    padding: 1rem 1.5rem;
    background-color: var(--darkgreen);
    border-radius: 0.5rem;
    color: var(--white);
  }
`;

const FooterStyles = styled.div`
  position: relative;
  margin: 0;
  width: 100vw;
  padding: 0.5rem 0 0.5rem 0;
  line-height: 1.35;
  --columns: 1;
  background-color: var(--gold);
  min-height: 5vh;
  ul {
    padding: 0;
    display: grid;
    grid-template-areas:
      '. copyright copyright .'
      '. dev dev .'
      '. priv priv .';
    text-align: center;
    font-size: 1.4rem;
    color: var(--white);
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: var(--white);
    &:hover {
      color: var(--darkgreen);
    }
  }
  #copyright {
    grid-area: copyright;
  }
  #developer {
    grid-area: dev;
  }
  #privacy {
    grid-area: priv;
  }
  @media (max-width: 400px) {
    ul {
      font-size: 1rem;
    }
  }
`;

export default function Footer() {
  return (
    <footer>
      <PreFooterStyles>
        <div className="threeColContainer">
          <Link to="/">
            <div className="threeCol logo" />
          </Link>
          <div className="threeCol">
            <ul className="importantLinks">
              <li>
                <Link to="/volunteer">Apply to Volunteer</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="threeCol">
            <ul className="donateSocialMedia">
              <li>
                <Link to="/donate" className="buttonesque">
                  Donate
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/JosephCenterGJ/"
                  target="_blank"
                  rel="noreferrer"
                  className="socialMediaF"
                >
                  f
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PreFooterStyles>
      <FooterStyles>
        <ul>
          <li id="copyright">
            &copy; The Joseph Center {new Date().getFullYear()}
          </li>
          <li id="developer">
            <a href="https://ericphifer.com" target="_blank" rel="noreferrer">
              Designed &amp; Developed by Eric Phifer LLC
            </a>
          </li>
          <li id="privacy">
            <div />
            <Link to="/privacypolicy">Privacy Policy</Link> |{' '}
            <Link to="/termsconditions">Terms &amp; Conditions</Link>
          </li>
        </ul>
      </FooterStyles>
    </footer>
  );
}
