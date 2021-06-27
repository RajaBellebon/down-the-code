import { baseUrl } from '../../cypress';
import { selectors } from '../fixtures/selectors';

const menuLinks = require('../../gatsby-config.js').siteMetadata.menuLinks;

// We don't need to retest the homepage.
// FIXME: fix new zealand test.
const pages = menuLinks.map(page => page.link).filter(page => page !== '/' && page !== '/about-us' && page !== '/new-zealand');

const viewport = ['macbook-15', 'iphone-6', 'ipad-2'];

describe('DownTheCode', () => {
  pages.forEach(page => {
    viewport.forEach(view => {
      it(`Should display the page: ${page} in the ${view}`, () => {
        cy
          .viewport(view)
          .visit(`${baseUrl}${page}`)
          .get(selectors.subtitle)
          .should('be.visible')
          .get(selectors.paragraph)
          .should('be.visible')
          .get(selectors.image)
          .should('be.visible')
          .get(selectors.footer)
          .should('be.visible');
      });
    });
  });
});
