import React from 'react';
import Layout from '../components/layout';
import Weather from '../components/weather/Weather';

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
    <p>🏗🏗🏗🏗The site is currently under construction.🏗🏗🏗🏗</p>
    <p>DISPLAY AN IMAGE</p>
  </Layout>
);

export default IndexPage;
