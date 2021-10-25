import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useContact from '../utils/useContact';

const VolunteerStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    padding-top: 4rem;
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
    // doesnt work TODO: fix
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
      @media only screen and (max-width: 300px) {
        grid-template-columns: minmax(auto, 1fr);
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
      @media only screen and (max-width: 728px) {
        grid-template-columns: repeat(3, minmax(auto, 1fr));
      }
      @media only screen and (max-width: 442px) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
      }
      @media only screen and (max-width: 300px) {
        grid-template-columns: minmax(auto, 1fr);
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
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
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
            <fieldset id="container">
              <legend />
              <div className="basicInfo twoColContainer">
                <div className="flex firstName twoCol">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={values.firstName}
                    onChange={updateValue}
                    placeholder="First Name"
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="flex lastName twoCol">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={values.lastName}
                    onChange={updateValue}
                    placeholder="Last Name"
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="flex phone twoCol">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    placeholder="Phone"
                    required
                  />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="flex email twoCol">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="volunteerOpportunities">
                <label htmlFor="opportunity">Volunteer Opportunity</label>
                <br />
                <input
                  type="checkbox"
                  name="dayShelterResource"
                  id="dayShelterResource"
                  value={values.dayShelterResource}
                  onChange={updateValue}
                />
                <label htmlFor="dayShelterResource" className="checkboxLabel">
                  Day Shelter Resource
                </label>
                <br />
                <input
                  type="checkbox"
                  name="dayShelterKitchen"
                  id="dayShelterKitchen"
                  value={values.dayShelterKitchen}
                  onChange={updateValue}
                />
                <label htmlFor="dayShelterKitchen" className="checkboxLabel">
                  Day Shelter Kitchen
                </label>
                <br />
                <input
                  type="checkbox"
                  name="repPayeeProgram"
                  id="repPayeeProgram"
                  value={values.repPayeeProgram}
                  onChange={updateValue}
                />
                <label htmlFor="repPayeeProgram" className="checkboxLabel">
                  Represeentative Payee Program
                </label>
                <br />{' '}
                <input
                  type="checkbox"
                  name="parentAdvocacyProgram"
                  id="parentAdvocacyProgram"
                  value={values.parentAdvocacyProgram}
                  onChange={updateValue}
                />
                <label
                  htmlFor="parentAdvocacyProgram"
                  className="checkboxLabel"
                >
                  Parent Advocacy Program
                </label>
                <br />
              </div>
              <div className="availability fiveColContainer">
                <div className="flex monday fiveCol">
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
                  <label htmlFor="monday">Monday</label>
                </div>
                <div className="flex tuesday fiveCol">
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
                  <label htmlFor="tuesday">Tuesday</label>
                </div>
                <div className="flex wednesday fiveCol">
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
                  <label htmlFor="wednesday">Wednesday</label>
                </div>
                <div className="flex thursday fiveCol">
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
                  <label htmlFor="thursday">Thursday</label>
                </div>
                <div className="flex friday fiveCol">
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
                  <label htmlFor="friday">Friday</label>
                </div>
                <div className="flex saturday fiveCol">
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
                  <label htmlFor="saturday">
                    Saturday<sub>*Winter Only*</sub>
                  </label>
                </div>
                <div className="flex addlComments fiveCol">
                  <textarea
                    type="addlComments"
                    name="addlComments"
                    id="addlComments"
                    rows="2"
                    value={values.addlComments}
                    onChange={updateValue}
                    placeholder="Additional Comments"
                  />
                  <label htmlFor="addlComments">
                    Availability Additional Comments
                  </label>
                </div>
              </div>
              <div className="reasoning">
                <div className="flex reason">
                  <textarea
                    name="reason"
                    id="reason"
                    value={values.reason}
                    onChange={updateValue}
                    rows="3"
                    placeholder="Why do you want to Volunteer?"
                    required
                  />
                  <label htmlFor="reason">Reason for Volunteering</label>
                </div>
                <div className="flex benefit">
                  <textarea
                    name="benefit"
                    id="benefit"
                    value={values.benefit}
                    onChange={updateValue}
                    rows="3"
                    placeholder="How do you plan to benefit the Joseph Center?"
                    required
                  />
                  <label htmlFor="benefit" className="benefit">
                    Benefit
                  </label>
                </div>
              </div>
              <div className="flex qualifications">
                <textarea
                  name="qualifications"
                  id="qualifications"
                  value={values.qualifications}
                  onChange={updateValue}
                  rows="3"
                  placeholder="What Qualifications and Skills do you have?"
                  required
                />
                <label htmlFor="qualifications">
                  Qualifications and Skills
                </label>
              </div>
              <div className="flex employment">
                <textarea
                  name="employment"
                  id="employment"
                  value={values.employment}
                  onChange={updateValue}
                  rows="3"
                  placeholder="Give a brief summary of your employment history and training"
                  required
                />
                <label htmlFor="employment">
                  Employment History and Training
                </label>
              </div>
              <div className="orgAndResponsibilities">
                <div className="fourColContainer">
                  <div className="flex organization fourCol">
                    <input
                      type="organization1"
                      name="organization1"
                      id="organization1"
                      value={values.organization1}
                      onChange={updateValue}
                      placeholder="Organization"
                      required
                    />
                    <label htmlFor="organization1">Organization</label>
                  </div>
                  <div className="fourCol flex">
                    <input
                      type="date"
                      name="beginDate1"
                      id="beginDate1"
                      value={values.beginDate1}
                      onChange={updateValue}
                      placeholder="01/01/2000"
                      required
                    />
                    <label htmlFor="beginDate1">Begin Date</label>
                  </div>
                  <div className="fourCol flex">
                    <input
                      type="date"
                      name="endDate1"
                      id="endDate1"
                      value={values.endDate1}
                      onChange={updateValue}
                      placeholder="01/01/2002"
                      required
                    />
                    <label htmlFor="endDate1">End Date</label>
                  </div>
                </div>
                <div className="flex">
                  <textarea
                    name="responsibilities1"
                    id="responsibilities1"
                    value={values.responsibilities1}
                    onChange={updateValue}
                    rows="3"
                    placeholder="What were your responsibilities in this position?"
                    required
                  />
                  <label htmlFor="responsibilities1">Responsibilities</label>
                </div>
                <div className="fourColContainer">
                  <div className="flex organization fourCol">
                    <input
                      type="organization2"
                      name="organization2"
                      id="organization2"
                      value={values.organization2}
                      onChange={updateValue}
                      placeholder="Organization"
                      required
                    />
                    <label htmlFor="organization2" className="organization">
                      Organization
                    </label>
                  </div>
                  <div className="flex fourCol">
                    <input
                      type="date"
                      name="beginDate2"
                      id="beginDate2"
                      value={values.beginDate2}
                      onChange={updateValue}
                      placeholder="01/01/2000"
                      required
                    />
                    <label htmlFor="beginDate2">Begin Date</label>
                  </div>
                  <div className="flex fourCol">
                    <input
                      type="date"
                      name="endDate2"
                      id="endDate2"
                      value={values.endDate2}
                      onChange={updateValue}
                      placeholder="01/01/2002"
                      required
                    />
                    <label htmlFor="endDate2">End Date</label>
                  </div>
                </div>
                <div className="flex">
                  <textarea
                    name="responsibilities2"
                    id="responsibilities2"
                    value={values.responsibilities2}
                    onChange={updateValue}
                    rows="3"
                    placeholder="What were your responsibilities in this position?"
                    required
                  />
                  <label htmlFor="responsibilities2">Responsibilities</label>
                </div>
                <div className="fourColContainer">
                  <div className="flex organization fourCol">
                    <input
                      type="organization3"
                      name="organization3"
                      id="organization3"
                      value={values.organization3}
                      onChange={updateValue}
                      placeholder="Organization"
                      required
                    />
                    <label htmlFor="organization3" className="organization">
                      Organization
                    </label>
                  </div>
                  <div className="flex fourCol">
                    <input
                      type="date"
                      name="beginDate3"
                      id="beginDate3"
                      value={values.beginDate3}
                      onChange={updateValue}
                      placeholder="01/01/2000"
                      required
                    />
                    <label htmlFor="beginDate3">Begin Date</label>
                  </div>
                  <div className="flex fourCol">
                    <input
                      type="date"
                      name="endDate3"
                      id="endDate3"
                      value={values.endDate3}
                      onChange={updateValue}
                      placeholder="01/01/2002"
                      required
                    />
                    <label htmlFor="endDate3">End Date</label>
                  </div>
                </div>
                <div className="flex">
                  <textarea
                    name="responsibilities3"
                    id="responsibilities3"
                    value={values.responsibilities3}
                    onChange={updateValue}
                    rows="3"
                    placeholder="What were your responsibilities in this position?"
                    required
                  />
                  <label htmlFor="responsibilities3">Responsibilities</label>
                </div>
              </div>
              <div className="formFields">
                <div
                  className="g-recaptcha recaptcha"
                  data-sitekey="[insert-data-key-here]"
                />
              </div>
              <div id="submitContainer" className="formFields">
                <button type="submit">Submit Application</button>
              </div>
            </fieldset>
          </form>
        </div>
      </VolunteerStyles>
    </>
  );
}
