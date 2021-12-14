import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const TermStyles = styled.div`
  max-width: 850px;
  margin: 5rem auto;
  padding: 2rem 0;
  color: black;
  word-wrap: break-word;
  h1,
  h2 {
    text-align: center;
  }
  a {
    color: black;
  }
  p {
    font-size: 1.2rem;
  }
  .updateDate {
    text-align: center;
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
  .call {
    display: none;
  }
  @media (pointer: coarse) {
    .call {
      display: block;
    }
  }
`;

function countOrder(terms) {
  const counts = terms.map((term) => term);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function TermsConditions({ data }) {
  // const terms = data.terms.nodes;
  // const order = countOrder(terms);
  return (
    <>
      <SEO title="Terms &amp; Conditions" />
      <TermStyles>
        <h1>Terms and Conditions</h1>
        <p className="updateDate">Last updated: September 1, 2021</p>
        {/* {order.map((term) => (
          <div key={term.id}>
            <br />
            <h1>{term.title}</h1>
            <br />
            <div>
              {term.contents.map((content) => (
                <div>
                  <div>{content}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))} */}
        <div>
          <p>Joseph Center</p>
          <p>Grand Junction, CO 81501 United States</p>
          <p className="call">
            <a href="tel:555-555-5555">Contact Us by Phone</a>
          </p>
          <p>
            <Link to="/contact">Contact Us by Email</Link>
          </p>
        </div>
      </TermStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     terms: allSanityTermsConditions {
//       nodes {
//         contents
//         id
//         order
//         title
//       }
//     }
//   }
// `;
