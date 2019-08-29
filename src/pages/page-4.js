import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const WA = ({ data }) => (
  <Layout>
    <h2>Broome: Western Australia</h2>
    <p>Cap L'Eveque and Cable Beach</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges
        .filter(img => img.node.name.includes('western'))
        .map(img => {
          return (
            <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
          );
        })}
    </div>
  </Layout>
);

export default WA;

// export const query = graphql`
//   query AllFiles {
//     # the filter is usefull if you have multiple source-filesystem instances
//     # the name "images" is set in the gatsby-config
//     allFile(filter: { sourceInstanceName: { eq: "wa" } }) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//           name
//         }
//       }
//     }
//   }
// `;
