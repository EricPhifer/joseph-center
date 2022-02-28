import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PolicyStyles = styled.div`
  max-width: 850px;
  margin: 5rem auto;
  padding: 2rem 0;
  color: black;
  word-wrap: break-word;
  h1,
  h2 {
    text-align: center;
  }
  p {
    font-size: 1.2rem;
  }
  .updateDate {
    text-align: center;
    margin: 0;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

function countOrder(policies) {
  const counts = policies.map((policy) => policy);
  const sortedOrder = Object.values(counts).sort((a, b) => a.order - b.order);
  return sortedOrder;
}

export default function PrivacyPolicy({ data }) {
  // const policies = data.policies.nodes;
  // const order = countOrder(policies);
  return (
    <>
      <SEO title="Privacy Policy" />
      <PolicyStyles>
        <h1>Privacy Policy</h1>
        <p className="updateDate">Last updated: September 1, 2021</p>
        {/* {order.map((policy) => (
          <div key={policy._id}>
            <br />
            <h1>{policy.title}</h1>
            <br />
            <div>
              {policy.contents.map((content) => (
                <div>
                  <div>{content}</div>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </PolicyStyles>
    </>
  );
}

// export const query = graphql`
//   query {
//     policies: allSanityPrivacyPolicy {
//       nodes {
//         id
//         order
//         title
//         contents
//       }
//     }
//   }
// `;
