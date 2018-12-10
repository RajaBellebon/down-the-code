import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FourthPage = () => (
  <Layout>
    <h1>Design System</h1>
    <p>Design system at the Everest Base Camp</p>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/page-2/">360</Link>
    <br/>
    <Link to="/page-3/">Mountain</Link>
    <br/>
    <Link to="/page-5/">About us</Link>
  </Layout>
)

export default FourthPage
