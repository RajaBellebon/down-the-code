import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const IndexPage = ({data}) => (
  <Layout>
    <h2>Welcome to Down the Code!</h2>
    <p>
      ✈️ Enjoy the pics of our different travels 🗺️!
    </p>
    <br />
    <br />
      <p>🌅 Coogee Beach at Sunrise 🌅</p>
      <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges.map(img => {
        console.log({img})
        return (
          <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
        );
      })}
      </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    # the filter is useful if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "home" } }) {
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
