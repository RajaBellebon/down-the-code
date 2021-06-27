import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import './layout.css';

const Layout = ({ children }: { children: any }) => (
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
            {
              name: 'description',
              content: 'Down the Code - Travel Pictures.',
            },
            { name: 'keywords', content: 'Coding, Trekking, Pictures.' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <Media query={{ MaxWidth: 848 }}>
          {matches =>
            matches ? (
              <div
                style={{
                  margin: '0 auto',
                  width: 980,
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
                  width: 980,
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
                    title="Event"
                    description="Visual Regression in a Frontend Mono-repository From 0 to 1"
                    href="https://applitools.com/event/visual-regression-in-a-frontend-mono-repository-from-0-to-1/"
                  />
                  <Sidebar
                    title="Event"
                    description="Code♥Design"
                    href="https://codeheartdesign.com/"
                  />
                  <Sidebar
                    title="Blog"
                    description="Javascript"
                    href="https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30"
                  />
                  <Sidebar
                    title="Blog"
                    description="How to write clean code"
                    href="https://medium.com/programming-hacks/basics-of-writing-clean-code-c1e79f3315d3"
                  />
                  <Sidebar
                    title="Linkedin Post"
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
