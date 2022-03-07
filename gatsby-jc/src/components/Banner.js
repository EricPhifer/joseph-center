import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BannerStyles = styled.div`
  background-color: #ffdb58;
  width: 100vw;
  height: 40px;
  margin: 75px 0 0 0;
  z-index: 99;
  position: fixed;
  left: 0;
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  place-content: center;
  h3 {
    padding: 0 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: tomato;
    text-transform: smallcaps;
  }
  h3 a {
    color: #fff;
  }
  h3 a:hover {
    color: tomato;
    text-decoration-color: #fff;
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
        Come join us for the 1st Annual Fundraiser Fabulous Family Fun Food
        Truck Friday!{' '}
        <Link to="/programs/1st-annual-fundraiser">
          Click here for details.
        </Link>
      </h3>
    </BannerStyles>
  );
}
