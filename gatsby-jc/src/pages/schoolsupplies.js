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
    .inline {
      display: inline-flex;
      flex-flow: row nowrap;
    }

    /* Customize the label (the container) */
    .checkboxLabel {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    /* Hide the browser's default checkbox */
    .checkboxLabel input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 25px;
      width: 25px;
      left: 0;
      top: -5px;
    }

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
    }

    /* Create a Toggle switch*/
    .switch {
      position: relative;
      display: inline-block;
      width: 77px;
      height: 34px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .checkboxLabel:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .checkboxLabel input:checked ~ .checkmark {
      background-color: #2196f3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .checkboxLabel input:checked ~ .checkmark:after {
      display: block;
    }
    /* Style the checkmark/indicator */
    .checkboxLabel .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
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
                <option value="PreK">Pre-K</option>
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
              <fieldset className="inline">
                <label htmlFor="assistwords">
                  Toggle the switch to blue if you will need assistance with the
                  school fee
                </label>
                <label htmlFor="assistance" className="switch">
                  <input
                    name="assistance"
                    id="assistance"
                    type="checkbox"
                    value={values.assistance}
                    onChange={updateValue}
                  />
                  <span className="slider round" />
                </label>
              </fieldset>
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
