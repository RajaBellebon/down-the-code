import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
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
    `,
  );
  return allFile.edges;
};

const India = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇮🇳 India: Delhi &amp; Kerala 🇮🇳</h2>
      <p>Backwaters, Tea Mountains, Elephants 🐘</p>
      {images.map((img: any) => {
        return (
          <Img fluid={img.node.childImageSharp.fluid}  alt={img.node.name} key={img.node.name} />
        );
      })}
    </Layout>
  );
};

export default India;
