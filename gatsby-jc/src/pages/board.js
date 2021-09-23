import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
// will need to import graphql and SanityImage

const BoardStyles = styled.div`
  text-align: center;
  // Four Column Grid
  .fourColContainer {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 0;
    place-content: center;
    @media only screen and (max-width: 582px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .fourCol {
    padding: 3rem;
    height: auto;
    border: 1px black solid;
  }
  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

export default function Board() {
  return (
    <>
      <SEO title="Board Members" />
      <BoardStyles>
        <h1>Board Members</h1>
        <div className="contentContainer fourColContainer">
          <div className="memberContainer fourCol">
            {/* map of board member images and names */}
            <div>Repeatable Board Member Img</div>
            <p>Repeatable Board Member Name</p>
          </div>
        </div>
      </BoardStyles>
    </>
  );
}

// Need GraphQL here
