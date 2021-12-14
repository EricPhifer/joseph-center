import React from 'react';
import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';

const SingleProgramStyles = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 1rem 0;
  h1 {
    margin: 5rem 0 2rem 0;
  }
  h3 {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
  }
  .goal {
    margin-bottom: 1rem;
    font-weight: bold;
  }
  // Two Column Grid
  .twoColContainer {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 400px;
    padding: 2rem 0;
    text-align: center;
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
    .buttonesque {
      margin: 0 1rem;
      padding: 2rem 3rem;
      border-radius: 5px;
      a {
        color: var(--white);
      }
    }
    .contactBtn {
      background-color: var(--gold);
    }
    .volunteerBtn {
      background-color: var(--darkgreen);
    }
  }
  @media only screen and (max-width: 400px) {
  }
`;

export default function SingleProgramsPage({ data }) {
  const { programs } = data;
  return (
    <>
      <SingleProgramStyles>
        <div className="contentContainer">
          <div className="image">
            <SanityImage
              {...programs.image}
              alt={programs.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </div>
          <h1>{programs.title}</h1>
          <h3 className="goal">{programs.goal}</h3>
          <h3 className="hours">{programs.hours}</h3>
          {programs.contents.map((content) => (
            <span key={content}>
              <p className="content">{content}</p>
            </span>
          ))}
        </div>
        <h3>{programs.title} Provides:</h3>
        <ul className="services">
          {programs.services.map((service) => (
            <span key={service}>
              <li>{service}</li>
            </span>
          ))}
        </ul>
        <div className="twoColContainer">
          <div className="buttonesque twoCol contactBtn">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="buttonesque twoCol volunteerBtn">
            <Link to="/volunteer">Volunteer</Link>
          </div>
        </div>
      </SingleProgramStyles>
    </>
  );
}

export const query = graphql`
  query ($slug: String) {
    programs: sanityPrograms(slug: { current: { eq: $slug } }) {
      id
      title
      contents
      services
      goal
      hours
      image {
        ...ImageWithPreview
      }
      slug {
        current
      }
    }
  }
`;
