import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Wedding = ({ data }) => (
  <Layout>
    <h2>Wedding Pictures</h2>
    <p>Some nice shooting pics!</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges
        .filter(img => img.node.name.includes('Wedding'))
        .map(img => {
          return (
            <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
          );
        })}
    </div>
  </Layout>
);

export default Wedding;

// export const query = graphql`
//   query AllFiles {
//     # the filter is usefull if you have multiple source-filesystem instances
//     # the name "images" is set in the gatsby-config
//     allFile(filter: { sourceInstanceName: { eq: "wed" } }) {
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
