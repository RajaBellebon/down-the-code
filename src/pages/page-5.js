import React from 'react';
import { Link } from 'gatsby';
import GR from '../images/g-r.png';

import Layout from '../components/layout';

const FifthPage = () => (
  <Layout>
    <h2>About us</h2>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      <img src={GR} alt="Giulia and Raja" />
    </div>
    <br />
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/page-2/">360</Link>
    <br />
    <Link to="/page-3/">Mountain</Link>
    <br />
    <Link to="/page-4/">Design System</Link>
  </Layout>
);

export default FifthPage;
