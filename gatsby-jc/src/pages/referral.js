import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ReferralStyles = styled.div`
  max-width: 1200px;
  margin: 5rem 1.5rem 0;
  padding: 5rem 0;
  text-align: left;
  display: flex;
  justify-content: center;
  iframe {
    width: 100%;
  }
  // Three Column Grid
  .threeColContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 1rem;
    margin: 0 auto;
    padding: 2rem 0;
    place-content: center;
    @media only screen and (max-width: 450px) {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 300px) {
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .threeCol {
  }
  @media only screen and (max-width: 400px) {
    margin: 5rem 1.5rem;
  }
`;

export default function Referral() {
  return (
    <>
      <SEO title="Referral Form" />
      <ReferralStyles>
        <iframe
          src="https://the-joseph-center.casemgr.org/embed-casemgr-referral/46dd9429268ede42bf0f31629fb5fcea1fd65236"
          title="Referral Form"
          frameBorder="0"
          width="800"
          height="1287"
        />
      </ReferralStyles>
    </>
  );
}
