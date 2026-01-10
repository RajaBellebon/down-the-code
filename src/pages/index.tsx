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
                fluid(maxWidth: 800, quality: 90) {
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

const IndexPage = () => {
  const images = getImages();
  return (
    <Layout>
      <h2>Welcome to Down the Code!</h2>
      <center>
        ✈️ Enjoy the pics of our different travels 🗺️ or a daily image of the
        cosmos 🪐!
      </center>
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
      {/* // TODO: to fix
      // @ts-ignore */}
      <center>🌅 Coogee Beach at Sunrise 🌅</center>
    </Layout>
  );
};

export default IndexPage;
