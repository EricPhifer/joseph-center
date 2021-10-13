import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StoryStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  // Two Column Grid
  .twoColContainer {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 1.5rem;
    max-width: 1150px;
    margin: 0 auto;
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .twoCol {
    height: auto;
  }
  // One Column Grid
  .oneColContainer {
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    max-width: 1200px;
    margin: 0 auto;
    place-content: center;
  }
  .oneCol {
    margin-top: 1.5rem;
  }
  .storyImg {
    height: 40rem;
    width: 100%;
    border: 1px solid black;
  }
  h1,
  h2,
  .buttonContainer,
  .content {
    margin-left: 2rem;
  }
  p {
    font-size: 1.7rem;
    text-align: justify;
    a {
      text-decoration: none;
      color: var(--gold);
    }
  }
  .buttonContainer {
    max-width: 475px;
    padding: 0;
    margin-top: 5rem;
    margin-bottom: 15rem;
    text-align: center;
    justify-items: stretch;
    a {
      text-decoration: none;
    }
  }
  .buttonesque {
    color: var(--white);
    padding: 20px 40px;
    border-radius: 5px;
  }
  .volunteerBtn {
    background-color: var(--darkgreen);
  }
  .contactBtn {
    background-color: var(--gold);
  }
  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

export default function OurStory() {
  return (
    <>
      <SEO title="Our Story" />
      <StoryStyles>
        <div className="oneColContainer">
          <div className="storyImg oneCol" />
        </div>
        <div className="oneColContainer">
          <h1 className="oneCol">Our Story</h1>
          <h2 className="oneCol">
            The Joseph Center was created to support families in the
            intersection of homelessness and parenting. Our mission is to
            provide hope, establish stability, encourage resourcefulness and
            confer a sense of belonging to the greater community.
          </h2>
        </div>
        <div className="twoColContainer content">
          <div className="twoCol">
            <p>
              The concept of a Joseph Center was a long-standing vision of the
              founder Mona Highline. In 2015, Mrs. Highline and a group of women
              came together to develop the Joseph Center. Through a community
              needs assessment, the women discovered a gap in services for
              homeless women with their children. An auxiliary building at a
              church was offered to the women to open as a day shelter. The
              Joseph Center opened its doors September 8, 2016 to provide a safe
              place during the day for homeless families with children. This was
              our singular focus to empower these women’s lives with purpose.
            </p>
            <p>
              The Joseph Center was able to help these families with tangible
              resources, application fees, and rent deposits all provided by
              community donations. The Joseph Center was located at the
              auxiliary building for about a year when the church came under new
              leadership. We were asked to leave and were forced to find a new
              space.
            </p>
          </div>
          <div className="twoCol">
            <p>
              The Joseph Center split its services to a building at the
              Salvation Army and administrative offices at the Center for
              Independence. At first, we thought this was a setback however it
              opened the door for us to start a new program called the
              representative payee. The organization thrived in these new
              locations for about a year although there were some logistical
              challenges. That fall, we were once again told that the day
              shelter program would have to move. Winter was coming. We began
              actively looking for a new space with the intention of merging all
              of our services together under one roof.
            </p>
            <p>
              A generous donation was given to the Joseph Center to purchase a
              building. By January 2019, the Joseph Center had a new home and
              renovations on the building began. The Joseph Center continues to
              have a day shelter as well as the Joseph Center{' '}
              <Link to="/">Adult Advocacy Program</Link> (JCAAP) and Generating
              All Possibilities (GAP) fund. The representative payee program
              changed into Integrated Financial Services providing guardianship,
              conservatorship, VA fiduciary, and budget counseling.
            </p>
          </div>
        </div>
        <div className="twoColContainer buttonContainer">
          <Link to="/volunteer" className="twoCol buttonesque volunteerBtn">
            Volunteer
          </Link>
          <Link to="/contact" className="twoCol buttonesque contactBtn">
            Contact Us
          </Link>
        </div>
      </StoryStyles>
    </>
  );
}
