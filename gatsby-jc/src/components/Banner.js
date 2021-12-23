import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: tomato;
  width: 100vw;
  height: 40px;
  margin: 75px 0 0 0;
  position: fixed;
  left: 0;
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  place-content: center;
  h3 {
    padding: 0 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: white;
    text-transform: smallcaps;
  }
  @media only screen and (max-width: 735px) {
    height: 70px;
  }
  @media only screen and (max-width: 383px) {
    height: 100px;
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <h3>
        The Joseph Center will be closed for Christmas & New Year from 12/27/21 - 01/03/22.
        Regular hours will resume on 01/04/22.
      </h3>
    </BannerStyles>
  );
}
