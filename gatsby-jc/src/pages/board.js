import { graphql } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
// will need to import graphql and SanityImage

const BoardStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    padding: 4rem 0;
  }
  // Four Column Grid
  .fourColContainer {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    gap: 1rem;
    margin: 0 auto;
    place-content: center;
    @media only screen and (max-width: 582px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .fourCol {
    .boardImg {
      height: 300px;
      border: 10px groove gray;
    }
    .boardName {
      height: 50px;
      padding: 0;
    }
  }

  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

export default function Board({ data }) {
  const boardMembers = data.boardMembers.nodes;
  return (
    <>
      <SEO title="Board Members" />
      <BoardStyles>
        <h1>Board of Directors</h1>
        <div className="contentContainer fourColContainer">
          {boardMembers.map((member) => (
            <div className="memberContainer fourCol">
              {member.image ? (
                <SanityImage
                  {...member.image}
                  alt={member.name}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              ) : (
                <div className="noImage" />
              )}
              <h3 className="boardName">{member.name}</h3>
            </div>
          ))}
        </div>
      </BoardStyles>
    </>
  );
}

export const query = graphql`
  query {
    boardMembers: allSanityBoardMembers {
      nodes {
        id
        name
        image {
          ...ImageWithPreview
        }
      }
    }
  }
`;
