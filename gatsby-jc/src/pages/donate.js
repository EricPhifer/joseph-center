import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const DonateStyles = styled.div`
  max-width: 1200px;
  margin: 10rem auto;
  text-align: center;
  p {
    max-width: 500px;
    margin: 0.5rem auto 3rem auto;
    font-size: 1.5rem;
  }
  .buttonesque {
    margin: 0 1rem;
    padding: 10px 20px;
    border-radius: 5px;
  }
  // Five Column Grid
  .fiveColContainer {
    display: grid;
    grid-template-columns: repeat(5, minmax(auto, 1fr));
    gap: 1rem;
    padding: 2rem 0;
    place-content: center;
    .fiveCol {
      padding: 1rem;
      align-self: center;
    }
    h4 {
      grid-column: 1 / span 5;
    }
    @media only screen and (max-width: 847px) {
      h4 {
        grid-column: 1 / span 3;
      }
      grid-template-columns: repeat(3, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 534px) {
      h4 {
        grid-column: 1 / span 2;
      }
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
    @media only screen and (max-width: 363px) {
      h4 {
        grid-column: 1;
      }
      grid-template-columns: minmax(auto, 1fr);
    }
  }
  .oneTimeDonations {
    margin-bottom: 3rem;
    h4 {
      margin-bottom: 2rem;
    }
    a {
      text-decoration: none;
      color: var(--white);
      background-color: var(--darkgreen);
    }
  }
  .recurringDonations {
    margin-bottom: 3rem;
    h4 {
      margin-bottom: 2rem;
    }
    a {
      text-decoration: none;
      color: var(--white);
      background-color: var(--gold);
    }
  }
  @media only screen and (max-width: 400px) {
    p {
      padding: 0 1.2rem;
      font-size: 1.2rem;
    }
  }
`;

export default function Donate() {
  return (
    <>
      <SEO title="Donate" />
      <DonateStyles>
        <h1>Donate</h1>
        <h3>Thank you for supporting the Joseph Center!</h3>
        <p>
          Amounts can be adjusted by quantity. For example, if you want to
          donate $15 then select "Donate $5" and change the qunatity to 3.
        </p>
        <div className="oneTimeDonations fiveColContainer">
          <h4>One Time Donation</h4>
          <a
            href="https://buy.stripe.com/4gw14H7zY73w9lSaEE"
            className="buttonesque fiveCol"
          >
            Donate $5
          </a>
          <a
            href="https://buy.stripe.com/00g8x97zY5Zs2Xu9AC"
            className="buttonesque fiveCol"
          >
            Donate $10
          </a>
          <a
            href="https://buy.stripe.com/aEU5kXaMacnQ69G6os"
            className="buttonesque fiveCol"
          >
            Donate $25
          </a>
          <a
            href="https://buy.stripe.com/eVadRtbQedrU9lS4gm"
            className="buttonesque fiveCol"
          >
            Donate $50
          </a>
          <a
            href="https://buy.stripe.com/eVaaFh5rQ4VodC8aEM"
            className="buttonesque fiveCol"
          >
            Donate $100
          </a>
          <a
            href="https://buy.stripe.com/cN26p18E2fA20Pm00a"
            className="buttonesque fiveCol"
          >
            Donate $250
          </a>
          <a
            href="https://buy.stripe.com/3cs3cP4nMevY2XufZa"
            className="buttonesque fiveCol"
          >
            Donate $500
          </a>
          <a
            href="https://buy.stripe.com/00gcNpf2q4Vo0Pm5ky"
            className="buttonesque fiveCol"
          >
            Donate $1,000
          </a>
          <a
            href="https://buy.stripe.com/6oE4gT07wafI8hO9AQ"
            className="buttonesque fiveCol"
          >
            Donate $2,500
          </a>
          <a
            href="https://buy.stripe.com/9AQdRtg6ucnQ8hO7sK"
            className="buttonesque fiveCol"
          >
            Donate $5,000
          </a>
        </div>
        <div className="recurringDonations fiveColContainer">
          <h4>Donate Recurring Monthly</h4>
          <a
            href="https://buy.stripe.com/bIYdRt2fE0F89lSbIJ"
            className="buttonesque fiveCol"
          >
            Donate $5
          </a>
          <a
            href="https://buy.stripe.com/5kA3cPdYmafI8hO7sv"
            className="buttonesque fiveCol"
          >
            Donate $10
          </a>
          <a
            href="https://buy.stripe.com/00gdRt1bA5Zs41y005"
            className="buttonesque fiveCol"
          >
            Donate $25
          </a>
          <a
            href="https://buy.stripe.com/5kAeVxg6ubjMfKgdQX"
            className="buttonesque fiveCol"
          >
            Donate $50
          </a>
          <a
            href="https://buy.stripe.com/bIYaFhg6u3RkgOk14d"
            className="buttonesque fiveCol"
          >
            Donate $100
          </a>
          <a
            href="https://buy.stripe.com/eVaaFh5rQ4VodC8aEM"
            className="buttonesque fiveCol"
          >
            Donate $250
          </a>
          <a
            href="https://buy.stripe.com/fZe5kXbQefA269G8wJ"
            className="buttonesque fiveCol"
          >
            Donate $500
          </a>
          <a
            href="https://buy.stripe.com/5kAbJl8E2evY8hO7sH"
            className="buttonesque fiveCol"
          >
            Donate $1,000
          </a>
          <a
            href="https://buy.stripe.com/6oE3cPf2q3RkeGc7sJ"
            className="buttonesque fiveCol"
          >
            Donate $2,500
          </a>
          <a
            href="https://buy.stripe.com/4gw14HbQe87A0PmeVd"
            className="buttonesque fiveCol"
          >
            Donate $5,000
          </a>
        </div>
      </DonateStyles>
    </>
  );
}
