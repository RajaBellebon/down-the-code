import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Borneo = ({ data }) => (
  <Layout>
    <h2>Borneo</h2>
    <p>Junge, Mountains, Trekking, Relaxing</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges.map(img => {
        return (
          <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
        );
      })}
    </div>
  </Layout>
);

export default Nepal;

export const query = graphql`
  query BorneoQuery {
    # the filter is useful if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "borneo" } }) {
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