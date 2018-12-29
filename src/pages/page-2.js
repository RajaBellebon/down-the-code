import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/layout';

const Travel = () => (
  <Layout>
    <h2>Nepal</h2>
    <p>Let's put some nice pics from our recent travel</p>
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

export default Travel;

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
