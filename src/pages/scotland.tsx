import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
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
    `,
  );
  return allFile.edges;
};

const Scotland = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland 2014 🏴󠁧󠁢󠁳󠁣󠁴󠁿</h2>
      <center>💧 Cold, Winter, Wind, Loch Ness, Whiskey</center>

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

export default Scotland;
