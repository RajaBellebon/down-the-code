import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "bruxelles" } }) {
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

const Bruxelles = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇧🇪 Bruxelles 🇧🇪</h2>
      <p>🏛️ Monuments and Grey sky!</p>
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

export default Bruxelles;
