import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TestimonialStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: left;
  // Three Column Grid
  .threeColContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
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
    border: 1px black solid;
    height: 250px;
  }
  @media only screen and (max-width: 400px) {
  }
`;

export default function Testimonials() {
  return (
    <>
      <SEO title="Testimonials" />
      <TestimonialStyles>
        <h1>Testimonials</h1>
        <div className="contentContainer">
          <p>
            Many of our families have moved out of homelessness and into safe
            homes, jobs, and a bright future. Check out their stories and join
            us in celebrating their success!
          </p>
        </div>
        <div className="threeColContainer">
          <div className="threeCol" />
          <div className="threeCol" />
          <div className="threeCol" />
          <div className="threeCol" />
          <div className="threeCol" />
        </div>
      </TestimonialStyles>
    </>
  );
}
