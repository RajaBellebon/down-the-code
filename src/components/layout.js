import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
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
                  <Sidebar title="Blogs" description="Recent hot blogs" />
                </div>
              </div>
            )
          }
        </Media>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
