import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ThirdPage = () => (
  <Layout>
    <h2>Mountain</h2>
    <p>Mountains...</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/page-2/">360</Link>
    <br />
    <Link to="/page-4/">Design System</Link>
    <br />
    <Link to="/page-5/">About us</Link>
  </Layout>
);

export default ThirdPage;
