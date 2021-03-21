import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const ABoutUs = ({ data }) => (
  <Layout>
    <h2>About us</h2>
    <div>👩🏻Giulia</div>
    <em>Economist / Strategist</em>
    <div>♥️</div>
    <div>👨🏾Raja</div>
    <em>Software Engineer</em>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges.map(img => {
        return (
          <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
        );
      })}
    </div>
  </Layout>
);

export default AboutUs;

export const query = graphql`
  query AboutUsQuery {
    # the filter is useful if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "about" } }) {
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