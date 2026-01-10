import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "borneo" } }) {
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

const Borneo = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>🇲🇾 Borneo 2017 🇲🇾</h2>
      <center>🎋 Junge, Mountains, Trekking, Islands</center>
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

export default Borneo;
