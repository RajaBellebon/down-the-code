import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
// import Image from '../components/image'
import Layout from '../components/layout';
import Weather from '../components/weather/Weather';

const IndexPage = ({ data }) => (
  <Layout>
    <h2>Welcome to Down the Code, a website - blog with a bit of everything ...</h2>
    <br />
    < Weather />
    <br />
    <p>🏗🏗🏗🏗The site is currently under construction.🏗🏗🏗🏗</p>
    <p>I'll display some images in the meantime.</p>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      {data.allFile.edges
        .filter(img => ['tulec', 'g-r'].indexOf(img.node.name) === -1)
        .map(img => {
          return (
            <Img fluid={img.node.childImageSharp.fluid} key={img.node.name} />
          );
        })}
    </div>
    <Link to="/page-2/">360</Link>
    <br />
    <Link to="/page-3/">Mountain</Link>
    <br />
    <Link to="/page-4/">Design System</Link>
    <br />
    <Link to="/page-5/">About us</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query AllFiles {
    # the filter is usefull if you have multiple source-filesystem instances
    # the name "images" is set in the gatsby-config
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
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
