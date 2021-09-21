import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 100px auto 2rem auto;
  background: linear-gradient(grey, lightgrey, grey, lightgrey, grey);
  padding: 5px;
  padding: clamp(2px, 1vw, 8px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media only screen and (max-width: 768px) {
    margin: 70px 1.5rem 0 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
        </ContentStyles>
      </SiteBorderStyles>
      <Footer />
    </>
  );
}
