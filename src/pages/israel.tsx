import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "israel" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 95) {
                  ...GatsbyImageSharpFluid_withWebp
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

const Israel = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇮🇱 Israel 2013 🇮🇱</h2>
      <center>Tel Aviv, Jesurasel, Dead Sea, Lake Tiberias, Red Sea 🐪</center>
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

export default Israel;
