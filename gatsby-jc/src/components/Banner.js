import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 40px;
  margin: 0;
  position: fixed;
  left: 0;
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  place-content: center;
  h3 {
    font-size: 1.7rem;
    text-align: center;
    color: white;
    text-transform: smallcaps;
  }
  @media only screen and (max-width: 735px) {
    height: 50px;
  }
  @media only screen and (max-width: 383px) {
    height: 75px;
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <h3>
        The Joseph Center will be closed for Thanksgiving from 11/23 - 11/29.
        Regular hours will resume on 11/30.
      </h3>
    </BannerStyles>
  );
}
