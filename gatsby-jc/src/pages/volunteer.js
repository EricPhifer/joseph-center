import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';

const VolunteerStyles = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  h1 {
    padding-top: 4rem;
  }
  h1,
  p {
    margin: 0 1rem;
  }
  .space2 {
    padding: 2rem;
  }
  .basicInfo,
  .volunteerOpportunities,
  .qualifications,
  .employment,
  .orgAndResponsibilites,
  .saturday,
  .addlComments,
  .reason,
  .benefit {
    margin: 1rem 0 0 0;
  }
  form {
    padding: 0;
    margin: 0;
    input[required] + label:after,
    select[required] + label:after,
    textarea[required] + label:after {
      content: '*';
      padding-left: 0.4rem;
      color: red;
    }
    .flex {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      label {
        order: 1;
      }
      input,
      select,
      textarea {
        order: 2;
      }
    }
    // Two Column Grid
    .twoColContainer {
      display: grid;
      grid-template-columns: repeat(2, minmax(auto, 1fr));
      gap: 1rem;
      width: 100%;
      margin: 0 auto;
      padding: 2rem 0;
      place-content: center;
      @media only screen and (max-width: 350px) {
        grid-template-columns: minmax(auto, 1fr);
        grid-template-rows: auto;
        .twoCol {
          grid-column: 1;
        }
      }
    }
    .twoCol {
      width: 95%;
      input {
        width: 100%;
        padding: 1rem;
      }
    }

    // Four Column Grid
    .fourColContainer {
      display: grid;
      grid-template-columns: repeat(4, minmax(auto, 1fr));
      gap: 1rem;
      margin: 0 auto;
      padding: 2rem 0;
      place-content: center;
      @media only screen and (max-width: 582px) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
      }
      @media only screen and (max-width: 300px) {
        grid-template-columns: minmax(auto, 1fr);
      }
      .organization {
        width: 104%;
        grid-column: 1 / span 2;
        @media only screen and (max-width: 500px) {
          width: 100%;
        }
      }
      .fourCol {
        input {
          width: 92%;
          padding: 1rem;
        }
      }
    }
    // Five Column Grid
    .fiveColContainer {
      display: grid;
      grid-template-columns: repeat(5, minmax(auto, 1fr));
      gap: 1rem;
      width: 100%;
      margin: 0 auto;
      place-content: center;
      .saturday {
        grid-column: 1 / span 5;
      }
      .addlComments {
        grid-column: 1 / span 5;
        textarea {
          padding: 1rem;
          width: 98%;
        }
      }
      .fiveCol {
        label {
          line-height: 1.5;
        }
        select {
          width: 100%;
          padding: 1rem;
          background-color: var(--white);
        }
      }
      @media only screen and (max-width: 535px) {
        grid-template-columns: minmax(auto, 1fr);
        grid-template-rows: auto;
        .fiveCol {
          grid-column: 1;
        }
      }
    }
    label {
      line-height: 1.5;
    }
    textarea {
      padding: 1rem;
      width: 98%;
    }
    fieldset {
      border: none;
    }
    .volunteerOpportunities {
      margin-bottom: 3rem;
      .checkboxLabel {
        padding-left: 1rem;
      }
      input {
        padding: 0.5rem 0;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  #submitContainer {
    margin: 1rem;
    text-align: center;
    button {
      padding: 2rem 4rem;
      background-color: var(--green);
      &:hover {
        border: 1px solid var(--green);
        color: var(--green);
        background-color: white;
      }
    }
  }
`;

const FormStyles = styled.div`
  max-width: 800px;
  form {
    overflow: hidden;
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
      height: 0;
      width: 0;
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
    .container .checkmark:after {
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

export default function Volunteer() {
  const { values, updateValue } = useForm({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dayShelterResource: '',
    dayShelterKitchen: '',
    repPayeeProgram: '',
    parentAdvocacyProgram: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    addlComments: '',
    reason: '',
    benefit: '',
    qualifications: '',
    employment: '',
    organization1: '',
    beginDate1: '',
    endDate1: '',
    responsibilities1: '',
    organization2: '',
    beginDate2: '',
    endDate2: '',
    responsibilities2: '',
    organization3: '',
    beginDate3: '',
    endDate3: '',
    responsibilities3: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <>
      <SEO title="Volunteer" />
      <VolunteerStyles>
        <h1>Volunteer</h1>
        <div className="contentContainer">
          <p>
            The Joseph Center is completely volunteer-based, so we need
            dedicated people with a heart for helping others. When you volunteer
            you build meaningful relationships with our families, helping them
            move from a place of desperation to a place of hope.
          </p>
          <div className="space2" />
          <FormStyles>
            <form
              name="volunteer"
              id="formContainer"
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <fieldset id="container">
                <h3>Basic Information</h3>
                <hr />
                <label htmlFor="firstName" className="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="firstName"
                  value={values.firstName}
                  onChange={updateValue}
                  required
                />
                <label htmlFor="lastName" className="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="lastName"
                  value={values.lastName}
                  onChange={updateValue}
                  required
                />
                <label htmlFor="phone" className="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="phone"
                  value={values.phone}
                  onChange={updateValue}
                  required
                />
                <label htmlFor="email" className="email">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="email"
                  value={values.email}
                  onChange={updateValue}
                  required
                />
                <h3>Volunteer Opportunity</h3>
                <hr />
                <label htmlFor="dayShelterResource" className="checkboxLabel">
                  Day Shelter Resource
                  <input
                    type="checkbox"
                    name="dayShelterResource"
                    id="dayShelterResource"
                    value={values.dayShelterResource}
                    onChange={updateValue}
                  />
                  <span className="checkmark" />
                </label>

                <label htmlFor="dayShelterKitchen" className="checkboxLabel">
                  Day Shelter Kitchen
                  <input
                    type="checkbox"
                    name="dayShelterKitchen"
                    id="dayShelterKitchen"
                    value={values.dayShelterKitchen}
                    onChange={updateValue}
                  />
                  <span className="checkmark" />
                </label>

                <label htmlFor="repPayeeProgram" className="checkboxLabel">
                  Representative Payee Program
                  <input
                    type="checkbox"
                    name="repPayeeProgram"
                    id="repPayeeProgram"
                    value={values.repPayeeProgram}
                    onChange={updateValue}
                  />
                  <span className="checkmark" />
                </label>
                <label
                  htmlFor="parentAdvocacyProgram"
                  className="checkboxLabel"
                >
                  Parent Advocacy Program
                  <input
                    type="checkbox"
                    name="parentAdvocacyProgram"
                    id="parentAdvocacyProgram"
                    value={values.parentAdvocacyProgram}
                    onChange={updateValue}
                  />
                  <span className="checkmark" />
                </label>
                <h3>Availability</h3>
                <hr />
                <label htmlFor="monday">Monday</label>
                <select
                  type="monday"
                  name="monday"
                  id="monday"
                  value={values.monday}
                  onChange={updateValue}
                  required
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="tuesday">Tuesday</label>
                <select
                  type="tuesday"
                  name="tuesday"
                  id="tuesday"
                  value={values.tuesday}
                  onChange={updateValue}
                  required
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="wednesday">Wednesday</label>
                <select
                  type="wednesday"
                  name="wednesday"
                  id="wednesday"
                  value={values.wednesday}
                  onChange={updateValue}
                  required
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="thursday">Thursday</label>
                <select
                  type="thursday"
                  name="thursday"
                  id="thursday"
                  value={values.thursday}
                  onChange={updateValue}
                  required
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="friday">Friday</label>
                <select
                  type="friday"
                  name="friday"
                  id="friday"
                  value={values.friday}
                  onChange={updateValue}
                  required
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="saturday">
                  Saturday<sub>*Winter Only*</sub>
                </label>
                <select
                  type="saturday"
                  name="saturday"
                  id="saturday"
                  value={values.saturday}
                  onChange={updateValue}
                >
                  <option value="9to12">9-12</option>
                  <option value="12to3">12-3</option>
                  <option value="none">None</option>
                </select>
                <label htmlFor="addlComments">
                  Availability Additional Comments
                </label>
                <textarea
                  type="addlComments"
                  name="addlComments"
                  id="addlComments"
                  rows="2"
                  value={values.addlComments}
                  onChange={updateValue}
                  placeholder="Additional Comments"
                />
                <label htmlFor="reason">Reason for Volunteering</label>
                <textarea
                  name="reason"
                  id="reason"
                  value={values.reason}
                  onChange={updateValue}
                  rows="3"
                  placeholder="Why do you want to Volunteer?"
                  required
                />
                <label htmlFor="benefit" className="benefit">
                  Benefit
                </label>
                <textarea
                  name="benefit"
                  id="benefit"
                  value={values.benefit}
                  onChange={updateValue}
                  rows="3"
                  placeholder="How do you plan to benefit the Joseph Center?"
                  required
                />
                <label htmlFor="qualifications">
                  Qualifications and Skills
                </label>
                <textarea
                  name="qualifications"
                  id="qualifications"
                  value={values.qualifications}
                  onChange={updateValue}
                  rows="3"
                  placeholder="What Qualifications and Skills do you have?"
                  required
                />
                <h3>Employment</h3>
                <hr />
                <label htmlFor="employment">
                  Employment History and Training
                </label>
                <textarea
                  name="employment"
                  id="employment"
                  value={values.employment}
                  onChange={updateValue}
                  rows="3"
                  placeholder="Give a brief summary of your employment history and training"
                  required
                />

                <label htmlFor="organization1">Organization</label>
                <input
                  type="organization1"
                  name="organization1"
                  id="organization1"
                  value={values.organization1}
                  onChange={updateValue}
                  placeholder="Organization"
                  required
                />

                <label htmlFor="beginDate1">Begin Date</label>
                <input
                  type="date"
                  name="beginDate1"
                  id="beginDate1"
                  value={values.beginDate1}
                  onChange={updateValue}
                  placeholder="01/01/2000"
                  required
                />

                <label htmlFor="endDate1">End Date</label>
                <input
                  type="date"
                  name="endDate1"
                  id="endDate1"
                  value={values.endDate1}
                  onChange={updateValue}
                  placeholder="01/01/2002"
                  required
                />

                <label htmlFor="responsibilities1">Responsibilities</label>
                <textarea
                  name="responsibilities1"
                  id="responsibilities1"
                  value={values.responsibilities1}
                  onChange={updateValue}
                  rows="3"
                  placeholder="What were your responsibilities in this position?"
                  required
                />

                <label htmlFor="organization2" className="organization">
                  Organization
                </label>
                <input
                  type="organization2"
                  name="organization2"
                  id="organization2"
                  value={values.organization2}
                  onChange={updateValue}
                  placeholder="Organization"
                  required
                />

                <label htmlFor="beginDate2">Begin Date</label>
                <input
                  type="date"
                  name="beginDate2"
                  id="beginDate2"
                  value={values.beginDate2}
                  onChange={updateValue}
                  placeholder="01/01/2000"
                  required
                />

                <label htmlFor="endDate2">End Date</label>
                <input
                  type="date"
                  name="endDate2"
                  id="endDate2"
                  value={values.endDate2}
                  onChange={updateValue}
                  placeholder="01/01/2002"
                  required
                />

                <label htmlFor="responsibilities2">Responsibilities</label>
                <textarea
                  name="responsibilities2"
                  id="responsibilities2"
                  value={values.responsibilities2}
                  onChange={updateValue}
                  rows="3"
                  placeholder="What were your responsibilities in this position?"
                  required
                />

                <label htmlFor="organization3" className="organization">
                  Organization
                </label>
                <input
                  type="organization3"
                  name="organization3"
                  id="organization3"
                  value={values.organization3}
                  onChange={updateValue}
                  placeholder="Organization"
                  required
                />

                <label htmlFor="beginDate3">Begin Date</label>
                <input
                  type="date"
                  name="beginDate3"
                  id="beginDate3"
                  value={values.beginDate3}
                  onChange={updateValue}
                  placeholder="01/01/2000"
                  required
                />

                <label htmlFor="endDate3">End Date</label>
                <input
                  type="date"
                  name="endDate3"
                  id="endDate3"
                  value={values.endDate3}
                  onChange={updateValue}
                  placeholder="01/01/2002"
                  required
                />

                <label htmlFor="responsibilities3">Responsibilities</label>
                <textarea
                  name="responsibilities3"
                  id="responsibilities3"
                  value={values.responsibilities3}
                  onChange={updateValue}
                  rows="3"
                  placeholder="What were your responsibilities in this position?"
                  required
                />

                <button type="submit">Submit Application</button>
              </fieldset>
            </form>
          </FormStyles>
        </div>
      </VolunteerStyles>
    </>
  );
}
