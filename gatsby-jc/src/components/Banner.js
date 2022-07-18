import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 40px;
  margin: 75px 0 0 0;
  z-index: 1;
  position: fixed;
  left: 0;
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  place-content: center;
  h3 {
    padding: 0 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    text-transform: smallcaps;
  }
  h3 a {
    color: #fff;
    text-decoration-color: #fff;
  }
  h3 a:hover {
    color: var(--green);
    text-decoration-color: var(--green);
  }
  @media only screen and (max-width: 1295px) {
    height: 55px;
  }
  @media only screen and (max-width: 735px) {
    height: 70px;
  }
  @media only screen and (max-width: 450px) {
    height: 100px;
  }
  @media only screen and (max-width: 345px) {
    height: 125px;
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <h3>
        The Joseph Center will be closed this Thursday &amp; Friday 07/21 -
        07/22.{' '}
      </h3>
    </BannerStyles>
  );
}
