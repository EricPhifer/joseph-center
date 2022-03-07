import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import SanityImage from 'gatsby-plugin-sanity-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';
import Banner from '../components/Banner';

const ContactStyles = styled.div`
  max-width: 1200px;
  margin: 9rem auto -5rem;
  // Two Column Grid
  .twoColContainer {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(6, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 3rem;
    place-content: center;
    @media only screen and (max-width: 667px) {
      grid-template-columns: minmax(auto, 1fr);
      grid-template-rows: auto;
    }
  }
  .twoCol,
  .firstCol,
  .secondCol {
    input,
    textarea,
    button {
      width: 100%;
    }
  }
  .twoCol {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1 / span 2;
  }
  .firstCol {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1 / span 2;
    p {
      font-size: 1.5rem;
    }
    a[href^='tel:'] {
      text-decoration: none;
      color: var(--gold);
    }
    .space1 {
      padding: 1rem 0;
    }
    .space3 {
      padding: 3rem 0;
    }
    .indent {
      padding-left: 1rem;
    }
    .buttonesque {
      padding: 20px 40px;
      background-color: var(--darkgreen);
      color: var(--white);
      border-radius: 5px;
      text-decoration: none;
    }
    @media only screen and (max-width: 350px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1 / span 2;
    }
  }
  .secondCol {
    -ms-grid-column: 2;
    -ms-grid-column-span: 4;
    grid-column: 3 / span 4;
    @media only screen and (max-width: 350px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1 / span 2;
    }
  }
  @media only screen and (max-width: 667px) {
    h1 {
      text-align: center;
    }
    .twoColContainer {
      margin: 0;
    }
    .firstCol {
      grid-column: 1;
      text-align: center;
    }
    .secondCol {
      grid-column: 1;
      margin-top: 3rem;
    }
  }
  // One Column Grid
  .oneColContainer {
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    gap: 1rem;
    margin: 0 auto;
    padding: 2rem 0;
    place-content: center;
  }
  .oneCol {
    margin: 0.5rem 0 3rem 0;
  }
  .mapContainer {
    max-width: 1200px;
    margin: 0 auto;
    .oneCol {
      height: auto;
      border: none;
      iframe {
        width: 100%;
        border: 0;
      }
    }
  }
  @media only screen and (max-width: 736px) {
    margin: 12rem auto -5rem;
  }
  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

const FormStyles = styled.div`
  form {
    fieldset {
      border: none;
    }
    legend {
      font-size: 2.5rem;
    }
    input,
    select,
    textarea,
    button {
      box-sizing: border-box;
      display: block;
      margin-right: auto;
      margin-left: auto;
      width: 100%;
    }
    input,
    textarea {
      padding: 1vmin;
    }
    input,
    select {
      margin-bottom: 1vmin;
    }
    select {
      height: 6vmin;
    }
    button {
      margin-top: 3vmin;
      margin-bottom: 1vmin;
      padding: 2vmin;
    }
  }
`;

export default function Contact({ data }) {
  const images = data.images.nodes;
  const programs = data.programs.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    program: '',
    message: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="Contact Us" />
      <Banner />
      <ContactStyles>
        <div className="heroImg oneColContainer">
          <div className="oneCol">
            <SanityImage
              {...images[0].image}
              alt={images[0].title}
              style={{
                objectFit: 'cover',
                auto: 'format',
              }}
            />
          </div>
        </div>
        <h1>Contact Us</h1>
        <hr />
        <div className="twoColContainer">
          <div className="twoCol firstCol">
            <h3 className="leadHeader">Department Contacts:</h3>
            <br />
            <div className="phoneContacts indent">
              <h4 className="deptHeader">Day Shelter</h4>
              <a href="tel:9703149424">970-314-9424</a>
            </div>
            <div className="space1" />
            <div className="phoneContacts indent">
              <h4 className="deptHeader">Main Office</h4>
              <a href="tel:9702454672">970-245-4672</a>
            </div>
            <div className="space1" />
            <div className="phoneContacts indent">
              <h4 className="deptHeader">Payee Office</h4>
              <a href="tel:9702454672;ext=304">970-245-4672 x 304</a>
            </div>
            {/* maybe just tel:9702454672,304 
            TODO: test these phone links */}
            <div className="space1" />
            <h3 className="leadHeader">We're located at:</h3>
            <p className="indent">
              2511 Belford Ave #B <br />
              Grand Junction, CO 81501
            </p>

            <div className="space3" />
            <Link to="/volunteer" className="buttonesque">
              Volunteer
            </Link>
          </div>
          <div className="twoCol secondCol">
            <FormStyles>
              <form
                name="contact-form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-form" />
                <fieldset>
                  <legend>Send Us a Message</legend>
                  <label htmlFor="name" className="name">
                    Name
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={updateValue}
                    required
                  />
                  <label htmlFor="email" className="email">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="text"
                    value={values.email}
                    onChange={updateValue}
                    required
                  />
                  <label htmlFor="program" className="programChoice">
                    What program are you interested in?
                  </label>
                  <select
                    name="program"
                    id="program"
                    type="program"
                    value={values.program}
                    onChange={updateValue}
                    required
                  >
                    <option value="nopreference">No Preference</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.title}>
                        {program.title}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="message" className="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}
                    rows="5"
                    required
                  />
                  <button type="submit">Send</button>
                </fieldset>
              </form>
            </FormStyles>
          </div>
        </div>
        <div className="oneColContainer mapContainer">
          <div className="oneCol">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.3718935437328!2d-108.53881734867191!3d39.07522597944315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471c3ce2d286e7%3A0x23757e61c34a1bb9!2s2511%20Belford%20Ave%2C%20Grand%20Junction%2C%20CO%2081501!5e0!3m2!1sen!2sus!4v1634039908188!5m2!1sen!2sus"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Joseph Center Location"
            />
          </div>
        </div>
      </ContactStyles>
    </>
  );
}

export const query = graphql`
  query {
    images: allSanityImages {
      nodes {
        id
        title
        image {
          ...ImageWithPreview
        }
      }
    }
    programs: allSanityPrograms {
      nodes {
        title
        id
      }
    }
  }
`;
