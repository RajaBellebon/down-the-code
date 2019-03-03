import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Travel = ({ data }) => (
  <Layout>
    <h2>Nepal: Everest Base Camp</h2>
    <p>Let's put some nice pics from our recent travel in Nepal</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges
        .filter(img => ['tulec', 'g-r'].indexOf(img.node.name) === -1)
        .map(img => {
          return (
            <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
          );
        })}
    </div>
  </Layout>
);

export default Travel;

export const query = graphql`
  query AllFiles {
    # the filter is usefull if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`;
