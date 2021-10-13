import { Link } from 'gatsby';
import React from 'react';
// import { graphql } from 'gatsby';
// import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import twitter from '../assets/images/twitter.png';

const HomeStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  // Three Column Grid
  .threeColContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 0 1rem;
    max-width: 95%;
    margin: 0 auto 3rem auto;
    place-content: center;
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .threeCol {
    height: 275px;
    text-align: center;
    color: var(--white);
    padding: 0 2rem;
    .space {
      height: 4rem;
    }
    h3 {
      height: 3rem;
    }
    p {
      height: 10rem;
      font-size: 1.8rem;
      padding: 1.5rem 0;
      margin: auto;
    }
    a {
      color: var(--white);
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
    &:hover {
      background-color: var(--brown);
    }
  }
  // Two Column Grid
  .twoColContainer {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem 0;
    place-content: center;
    text-align: center;
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .twoCol {
    padding: 3rem;
    height: auto;
  }
  // One Column Grid
  .oneColContainer {
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    gap: 1rem;
    max-width: 950px;
    margin: 0 auto;
    place-content: center;
  }
  .oneCol {
    height: auto;
  }
  .carousel {
    width: 95%;
    height: 400px;
    margin: 1rem auto;
    border: 1px solid black;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  .programBox1 {
    background-color: var(--darkgreen);
  }
  .programBox2 {
    background-color: var(--gold);
  }
  .programBox3 {
    background-color: var(--green);
  }
  .buttonesque {
    color: var(--white);
    margin: 0 1rem;
    padding: 10px 20px;
    border-radius: 5px;
  }
  .volunteerBtn {
    background-color: var(--brown);
  }
  .learnMoreBtn {
    background-color: var(--gold);
  }
  .testimonyVideo {
    height: 40rem;
    border: 1px black solid;
  }
  .testimonyContainer {
    border-left: 5px lightgray solid;
    padding-left: 3rem;
    a {
      text-decoration: none;
      .tweet {
        display: block;
        width: 15px;
        height: 15px;
        margin: -4rem 4rem 0 0;
        float: right;
        background-image: url(${twitter});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
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

export default function HomePage({ data }) {
  // const homepage = data.home.nodes;
  return (
    <>
      <SEO title="Home Page" />
      <HomeStyles>
        <div className="carousel" />
        <div className="threeColContainer">
          <div className="threeCol programBox1">
            <div className="space" />
            <h3>Day Shelter</h3>
            <p>
              Creating a safe place for families to eat and shower, while
              equipping them to care for themselves.
            </p>
            <Link to="/testimony" className="callToAction">
              Learn More
            </Link>
          </div>
          <div className="threeCol programBox2">
            <div className="space" />
            <h3>Parent Advocacy</h3>
            <p>
              Providing parents and caretakers with a support system to navigate
              parent / children legal matters.
            </p>
            <Link to="/our-story" className="callToAction">
              Learn More
            </Link>
          </div>
          <div className="threeCol programBox3">
            <div className="space" />
            <h3>Integrated Financial Services</h3>
            <p>
              Representative Payee and VA Fiduciary allows a representative to
              be a designated payee for Social Security as well as VA benefits.
            </p>
            <Link to="/board" className="callToAction">
              Learn More
            </Link>
          </div>
        </div>
        <div className="oneColContainer">
          <div className="oneCol">
            <h2>The Joseph Center's Mission</h2>
            <p>
              The Joseph Center was created to support families in the
              intersection of homelessness and parenting. Our mission is to
              provide hope, establish stability, encourage resourcefulness and
              confer a sense of belonging to the greater community.
            </p>
            <div className="twoColContainer">
              <Link to="/volunteer" className="twoCol buttonesque volunteerBtn">
                Volunteer
              </Link>
              <Link to="/our-story" className="twoCol buttonesque learnMoreBtn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="oneColContainer">
          <div className="oneCol">
            <div className="testimonyVideo" />
            <div className="testimonyContainer">
              <p className="testimonyQuote">
                God has an army of angels within this group! I can’t say enough
                good things about The Joseph Center. They restore the faith back
                into the hearts of those who feel there is none!
              </p>
              <p className="testimonyName">​Michelle Williamson-Gabbard</p>
              <a href="https://twitter.com/intent/tweet?text=%3Ch4%3EGod%20has%20an%20army%20of%20angels%20within%20this%20group%21%20I%20can%E2%80%99t%20say%20enough%20good%20things%20about%20The%20Joseph%20Center.%20They%20restore%20the%20faith%20back%20into%20the%20hearts%20of%20those%20who%20feel%20there%20is%20none%21%3C%2Fh4%3E%20%E2%80%94%20%E2%80%8BMichelle%20Williamson-Gabbard">
                <span className="tweet" />
              </a>
            </div>
          </div>
        </div>
      </HomeStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     home: allSanityHomepage {
//       nodes {
//         id
//         welcome
//         contents {
//           content
//           contentURL
//           heading
//         }
//         image {
//           asset {
//             id
//           }
//         }
//       }
//     }
//   }
// `;
