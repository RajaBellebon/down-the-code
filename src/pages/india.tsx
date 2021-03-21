import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const India = ({ data }) => (
  <Layout>
    <h2>India: Kochi</h2>
    <p>Backwaters, Tea Mountains...Indians</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges.map(img => {
        return (
          <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
        );
      })}
    </div>
  </Layout>
);

export default India;

export const query = graphql`
  query IndiaQuery {
    # the filter is useful if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "india" } }) {
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