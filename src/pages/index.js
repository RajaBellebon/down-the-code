import React from 'react';
import Layout from '../components/layout';
import Weather from '../components/weather/Weather';
import Coogee from '../images/Coogee.png';

const IndexPage = () => (
  <Layout>
    <h2>Welcome to Down the Code!</h2>
    <p>
      You may find couple of things on this website from blogs to pictures or
      data projects. Enjoy!
    </p>
    <br />
    <Weather />
    <br />
    <div style={{ maxWidth: '800px', marginBottom: '1.45rem' }}>
      <img src={Coogee} alt="Coogee" />
      <p>Coogee Beach at Sunrise</p>
    </div>
  </Layout>
);

export default IndexPage;
