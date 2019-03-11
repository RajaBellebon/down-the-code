import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <Media query={{ maxWidth: 848 }}>
          {matches =>
            matches ? (
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 980,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: '25px',
                }}
              >
                <div style={{ flex: 1 }}>{children}</div>
              </div>
            ) : (
              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 980,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '100%',
                  padding: '25px',
                }}
              >
                <div style={{ flex: 2.5, paddingRight: '30px' }}>
                  {children}
                </div>
                <div style={{ flex: 1 }}>
                  <Sidebar
                    title="Recent Event"
                    description="Code♥Design"
                    href="https://codeheartdesign.com/"
                  />
                  <Sidebar
                    title="Recent Blog"
                    description="How to write clean code"
                    href="https://medium.com/programming-hacks/basics-of-writing-clean-code-c1e79f3315d3"
                  />
                  <Sidebar
                    title="Recent Linkedin Post"
                    description="Atlaskit repository visualisation"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:6508201456963846144"
                  />
                </div>
              </div>
            )
          }
        </Media>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
