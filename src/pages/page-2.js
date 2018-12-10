import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/layout';

const SecondPage = () => (
  <Layout>
    <h1>360</h1>
    <p>A nice 360 image</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      {/* {data.allFile.edges.filter(img =>img.node.name === 'three60').map(img => {
      return <Img fluid={img.node.childImageSharp.fluid} key={img.node.name}/>
      })} */}
    </div>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/page-3/">Mountain</Link>
    <br />
    <Link to="/page-4/">Design System</Link>
    <br />
    <Link to="/page-5/">About us</Link>
  </Layout>
);

export default SecondPage;

// export const pageQuery = graphql`
//   query page2Query {
//     site {
//       siteMetadata {
//         title
//       }
//     }

//     ...Files
//   }
// `;
