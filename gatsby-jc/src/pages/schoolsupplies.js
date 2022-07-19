import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';

const SupplyStyles = styled.div`
  max-width: 800px;
  margin: 10rem auto;
  h1 {
    padding-top: 4rem;
  }
  h1,
  p {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 380px) {
    margin: 15rem auto;
  }
`;

const FormStyles = styled.div`
  form {
    overflow: hidden;
    input[required] + label:after,
    select[required] + label:after,
    textarea[required] + label:after {
      content: '*';
      padding-left: 0.4rem;
      color: red;
    }
    .asterisk {
      color: red;
    }
    fieldset {
      display: flex;
      flex-flow: column nowrap;
      border: none;
    }
    input,
    textarea,
    select {
      box-sizing: border-box;
      padding: 1vmin;
      margin: 1vmin 0;
    }
    h3 {
      margin-top: 3vmin;
    }
    hr {
      border-top: 1px solid #fff;
      height: 0;
      width: 100%;
    }
    button {
      margin-top: 3vmin;
      margin-bottom: 1vmin;
      padding: 2vmin;
    }
    input,
    label {
      width: 100%;
    }
  }
`;

export default function SchoolSupplies() {
  const { values, updateValue } = useForm({
    parentname: '',
    schoolname: '',
    phone: '',
    email: '',
    grade: '',
    assistance: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="School Supplies Form" />
      <SupplyStyles>
        <FormStyles>
          <form
            name="supply-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="supply-form" />
            <fieldset>
              <h3>School Supplies Form</h3>
              <hr />
              <label htmlFor="parentname" className="parentname">
                Parent Name<span className="asterisk">{' *'}</span>
              </label>
              <input
                name="parentname"
                id="parentname"
                type="text"
                className="parentname"
                value={values.parentname}
                onChange={updateValue}
                required
              />
              <label htmlFor="schoolname" className="schoolname">
                School Name
              </label>
              <input
                name="schoolname"
                id="schoolname"
                type="text"
                className="schoolname"
                value={values.schoolname}
                onChange={updateValue}
                required
              />
              <label htmlFor="grade">
                What grade is your child in?
                <span className="asterisk" />
              </label>
              <select
                name="grade"
                id="grade"
                type="grade"
                value={values.grade}
                onChange={updateValue}
                required
              >
                <option value="Kindergarten">K</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              <label htmlFor="phone" className="phone">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                className="phone"
                value={values.phone}
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
                className="email"
                value={values.email}
                onChange={updateValue}
                required
              />
              <label htmlFor="assistance" className="assistance">
                Will you need assistance with the school fee?
              </label>
              <select
                name="assistance"
                id="assistance"
                type="assistance"
                value={values.assistance}
                onChange={updateValue}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <button type="submit" value="Submit">
                Submit Application
              </button>
            </fieldset>
          </form>
        </FormStyles>
      </SupplyStyles>
    </>
  );
}
