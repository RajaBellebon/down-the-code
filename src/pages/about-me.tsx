import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';

const getImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "about" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 3840, quality: 100) {
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

const AboutUs = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>About me</h2>
      <center>👨🏾 Raja - Team Lead / Sr. Software Engineer</center>
      {images.map((img: any) => {
        return (
          <Img
            fluid={img.node.childImageSharp.fluid}
            alt={img.node.name}
            key={img.node.name}
            imgStyle={{ objectFit: 'contain' }}
            style={{ maxHeight: '80vh' }}
          />
        );
      })}
    </Layout>
  );
};

export default AboutUs;
