import React from 'react';
import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';

const FormStyles = styled.div`
  max-width: 100%;
  padding: 2rem 0;
  @media only screen and (max-width: 646px) {
    padding: 0 0.5rem;
  }
  // Two Column Grid
  .twoColContainer {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    place-content: center;
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  #submitContainer {
    -ms-grid-column-align: right;
    justify-self: right;
    width: 175px;
    @media only screen and (max-width: 350px) {
      -ms-grid-column-align: center;
      justify-self: center;
      width: 100%;
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
    label {
      display: none;
    }
  }
  .twoCol {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1 / span 2;
  }
  .firstCol {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1 / span 1;
    @media only screen and (max-width: 350px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1 / span 2;
    }
  }
  .secondCol {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2 / span 1;
    @media only screen and (max-width: 350px) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1 / span 2;
    }
  }
`;

const ContactStyles = styled.div`
  text-align: center;
  // Two Column Grid
  .twoColContainer {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(6, minmax(auto, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    place-content: center;
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
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
  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

export default function Contact() {
  const { values, updateValue } = useForm({
    name: '',
    phone: '',
    email: '',
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
      <ContactStyles>
        <h1>Contact Us</h1>
        <div className="twoColContainer">
          <div className="twoCol firstCol">
            <h3>Contact Information</h3>
            <p>give contact info here</p>
            <p>give contact info here</p>
            <p>give contact info here</p>
          </div>
          <div className="twoCol secondCol">
            <FormStyles>
              <form
                name="contact"
                id="formContainer"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <fieldset id="container" className="twoColContainer">
                  <legend>Contact Us</legend>
                  <div id="nameContainer" className="firstCol">
                    <label htmlFor="name" className="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={updateValue}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div id="phoneContainer" className="secondCol">
                    <label htmlFor="phone" className="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={updateValue}
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div id="emailContainer" className="twoCol">
                    <label htmlFor="email" className="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={updateValue}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div id="messageContainer" className="twoCol">
                    <label htmlFor="message" className="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={updateValue}
                      rows="7"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div className="twoCol">
                    <div
                      className="g-recaptcha recaptcha"
                      data-sitekey="[insert-data-key-here]"
                    />
                  </div>
                  <div id="submitContainer" className="twoCol">
                    <button type="submit">
                      Send{' '}
                      <span>
                        <FaRegArrowAltCircleRight />
                      </span>
                    </button>
                  </div>
                </fieldset>
              </form>
            </FormStyles>
          </div>
        </div>
      </ContactStyles>
    </>
  );
}
