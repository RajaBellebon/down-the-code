import React from 'react';
import GR from '../images/g-r.png';

import Layout from '../components/layout';

const FifthPage = () => (
  <Layout>
    <h2>About us</h2>
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      <img src={GR} alt="Giulia and Raja" />
    </div>
    <div>Raja</div>
    <div>Giulia</div>
  </Layout>
);

export default FifthPage;
