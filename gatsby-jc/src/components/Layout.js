import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';

const ContentStyles = styled.div`
  max-width: 1200px;
  margin: 100px auto 2rem auto;
  background: var(--white);
  @media only screen and (max-width: 768px) {
    margin: 70px 1.5rem 0 1.5rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
      </ContentStyles>
      <Footer />
    </>
  );
}
