import React from 'react';
import GR from '../images/g-r.png';

import Layout from '../components/layout';

// TODO: Fix warnings for emoji wrapped and use span, aria-label and role.
//
/* eslint-disable */
const AboutUs = () => (
  <Layout>
    <h2>About us</h2>
    <div>👩🏻Giulia</div>
    <em>Economist / Strategist</em>
    <div>♥️</div>
    <div>👨🏾Raja</div>
    <em>Software Engineer</em>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      <img src={GR} alt="Giulia and Raja" />
    </div>
  </Layout>
);

export default AboutUs;
