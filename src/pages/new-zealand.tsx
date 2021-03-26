import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "isreal" } }) {
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

const NZ = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇳🇿 New Zealand: Queenstown 🇳🇿</h2>
      <p>🥝 Trekking, Mountains, Lake</p>

      {images.map((img: any) => {
        return (
          <Img
            fluid={img.node.childImageSharp.fluid}
            alt={img.node.name}
            key={img.node.name}
          />
        );
      })}
    </Layout>
  );
};

export default NZ;
