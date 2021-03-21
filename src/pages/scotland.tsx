import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const Scotland = ({ data }) => (
  <Layout>
    <h2>Scotland</h2>
    <p>Cold, Winter, Wind, Loch Ness, Whiskey</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges.map(img => {
        return (
          <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
        );
      })}
    </div>
  </Layout>
);

export default Scotland;

export const query = graphql`
  query ScotlandQuery {
    # the filter is useful if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "scotland" } }) {
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
