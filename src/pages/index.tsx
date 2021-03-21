import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
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
    `,
  );
  return allFile.edges;
};

const IndexPage = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>Welcome to Down the Code!</h2>
      <p>✈️ Enjoy the pics of our different travels 🗺️!</p>
      <br />
      <br />
      {images.map((img: any) => {
        return (
          <Img
            fluid={img.node.childImageSharp.fluid}
            alt={img.node.name}
            key={img.node.name}
          />
        );
      })}
      <center>🌅 Coogee Beach at Sunrise 🌅</center>
    </Layout>
  );
};

export default IndexPage;
