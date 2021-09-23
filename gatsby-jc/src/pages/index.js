import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
// import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';

const HomeStyles = styled.div`
  .heroBG {
    margin: 0;
    padding: 0;
    h1 {
      padding-bottom: 2rem;
      text-align: center;
      font-size: 4rem;
      text-shadow: 1px 1px 15px whitesmoke;
    }
    .imgContainer {
      max-width: 600px;
      margin: 0 auto;
      img {
        height: 400px;
      }
    }
  }
  .homeContent {
    padding: 1rem;
    border-bottom: 2px black groove;
    h3 {
      text-align: left;
      padding: 1rem;
      text-decoration: underline;
    }
    div {
      margin: 0 2rem 2rem 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .heroBG {
      h1 {
        font-size: 2.6rem;
      }
      .imgContainer {
        img {
          height: 300px;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .heroBG {
      h1 {
        font-size: 2.22rem;
      }
      .imgContainer {
        img {
          height: 200px;
        }
      }
    }
    .homeContent {
      font-size: 1.5rem;
    }
  }
`;

export default function HomePage() {
  // const homepage = data.home.nodes;
  return (
    <>
      <SEO title="Home Page" />
      <h1>Welcome to the Home Page</h1>
      {/* {homepage.map((home) => (
        <HomeStyles key={home.id}>
          <div className="heroBG">
            <h1>{home.welcome}</h1>
            <div className="imgContainer">
              <SanityImage
                {...home.image}
                alt="Welcome Page Image"
                height={500}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  auto: 'format',
                }}
              />
            </div>
          </div>
          {home.contents.map((info) => (
            <div key={info} className="homeContent">
              <h3>Here's Our Site Content</h3>
              <div>{info}</div>
            </div>
          ))} */}
      {/* </HomeStyles>
      ))} */}
    </>
  );
}

// export const query = graphql`
//   query {
//     home: allSanityHomepage {
//       nodes {
//         id
//         welcome
//         contents
//         image {
//           asset {
//             id
//           }
//           ...ImageWithPreview
//         }
//       }
//     }
//   }
// `;
