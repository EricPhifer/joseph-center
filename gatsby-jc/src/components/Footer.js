import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PreFooterStyles = styled.div`
  background-color: var(--gold);
  width: 100%;
  ul {
    list-style-type: none;
  }
  // Three Column Grid
  .threeColContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 0;
    place-content: center;
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .threeCol {
    padding: 3rem;
    height: auto;
  }
  .buttonesque {
    padding: 1rem 1.5rem;
    background-color: var(--darkgreen);
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
    color: gray;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: gray;
    &:hover {
      color: tomato;
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
          <div className="threeCol logo">logo</div>
          <div className="threeCol">
            <ul>
              <li>
                <Link to="/volunteer">Apply to Volunteer</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="threeCol">
            <ul>
              <li>
                <Link to="/donate" className="buttonesque">
                  Donate
                </Link>
              </li>
              <li>
                <Link className="socialMediaF">f</Link>
              </li>
            </ul>
          </div>
        </div>
      </PreFooterStyles>
      <FooterStyles>
        <ul>
          <li id="copyright">&copy; Company {new Date().getFullYear()}</li>
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
