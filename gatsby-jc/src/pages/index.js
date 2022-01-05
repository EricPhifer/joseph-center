import React from 'react';
import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import twitter from '../assets/images/twitter.png';
import YouTube from '../components/Youtube';

const HomeStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  // Four Column Grid
  .fourColContainer {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    gap: 1rem;
    place-content: center;
    padding: 2rem 0;
    overflow-x: hidden;
    h3,
    hr {
      width: 100%;
      grid-column: 1 / span 4;
      text-align: center;
    }
    hr {
      border: 1px solid var(--gold);
    }
    @media only screen and (max-width: 582px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
      h3,
      hr {
        grid-column: 1 / span 2;
      }
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
      h3,
      hr {
        grid-column: 1;
      }
    }
  }
  .fourCol {
    align-self: center;
  }
  // Three Column Grid
  .threeColContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 100%;
    margin: 0 auto 3rem auto;
    place-content: center;
    @media only screen and (max-width: 928px) {
      .threeCol {
        h3 {
          padding-bottom: 0.8rem;
        }
        p {
          font-size: 1.65rem;
        }
      }
    }
    @media only screen and (max-width: 783px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
      .programBox1 {
        grid-column: 1 / span 1;
      }
      .programBox2 {
        grid-column: 2 / span 1;
      }
      .programBox3 {
        grid-column: 1 / span 2;
        p {
          max-width: 400px;
        }
      }
    }
    @media only screen and (max-width: 545px) {
      grid-template-columns: minmax(auto, 1fr);
      .threeCol {
        height: 175px;
        .space {
          height: 2rem;
        }
        h3 {
          height: 2rem;
        }
        p {
          height: 5rem;
        }
      }
      .programBox1,
      .programBox2,
      .programBox3 {
        grid-column: 1;
      }
    }
    @media only screen and (max-width: 376px) {
      .threeCol {
        height: 175px;
        .space {
          height: 2rem;
        }
        h3 {
          height: 1rem;
        }
        p {
          height: 6rem;
          font-size: 1.6rem;
        }
      }
    }
    @media only screen and (max-width: 317px) {
      .threeCol {
        height: 175px;
        .space {
          height: 2rem;
        }
        h3 {
          height: 0.7rem;
          font-size: 1.6rem;
        }
        p {
          height: 6rem;
          font-size: 1.4rem;
        }
        a {
          font-size: 1.6rem;
        }
      }
    }
  }
  .threeCol {
    height: 275px;
    text-align: center;
    color: var(--white);
    padding: 0 1rem;
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
    margin: 5rem auto;
    place-content: center;
  }
  .oneCol {
    height: auto;
    @media only screen and (max-width: 975px) {
      h2,
      p {
        margin-left: 2rem;
        margin-right: 2rem;
      }
    }
    @media only screen and (max-width: 350px) {
      h2 {
        font-size: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      p {
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.5rem;
      }
      .buttonesque {
        font-size: 1.7rem;
      }
    }
  }
  .carousel {
    width: 100%;
    max-height: 500px;
    margin: 75px auto -0.5rem auto;
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
  }
  .testimonyContainer {
    border-left: 5px lightgray solid;
    padding-left: 1rem;
    margin: 0 1rem;
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
        @media only screen and (max-width: 417px) {
          margin: -4rem 2rem 0 0;
        }
        @media only screen and (max-width: 400px) {
          margin: -2rem 1rem 0 0;
        }
      }
    }
  }
  @media only screen and (max-width: 400px) {
    max-width: 95%;
    .testimonyContainer {
      p {
        margin: 0;
        padding-bottom: 1rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export default function HomePage({ data }) {
  const supporters = data.supporters.nodes;
  const images = data.images.nodes;
  const youtube = data.youtube.nodes;
  return (
    <>
      <SEO title="Home Page" />
      <HomeStyles>
        <div className="carousel">
          <SanityImage
            {...images[2].image}
            alt={images[2].title}
            style={{
              objectFit: 'cover',
              auto: 'format',
            }}
          />
        </div>
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
            <div className="testimonyVideo">
              <iframe
                height="315"
                src={youtube[0].youtubeUrl}
                title={youtube[0].title}
                frameBorder="0"
                crossorigin="anonymous"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="testimonyVideo">
                <YouTube id={youtube[0].youtubeUrl} />
              </div>
            </div>
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
        <div className="supporterList fourColContainer">
          <hr />
          <h3 className="fourCol">Partners</h3>
          <hr />
          {supporters.map((supporter) => (
            <div key={supporter.id} className="fourCol">
              <a href={supporter.website}>
                <SanityImage
                  {...supporter.logo}
                  alt={supporter.name}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </HomeStyles>
    </>
  );
}

export const query = graphql`
  query {
    supporters: allSanitySupporters {
      nodes {
        id
        name
        website
        logo {
          ...ImageWithPreview
        }
      }
    }
    images: allSanityImages {
      nodes {
        id
        title
        image {
          ...ImageWithPreview
        }
      }
    }
    youtube: allSanityYoutubeVideos {
      nodes {
        id
        youtubeUrl
        title
      }
    }
  }
`;
