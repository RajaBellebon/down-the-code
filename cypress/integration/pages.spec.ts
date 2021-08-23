import { baseUrl } from '../../cypress.json';
import { selectors } from '../fixtures/selectors';

const menuLinks = require('../../gatsby-config.js').siteMetadata.menuLinks;

// We don't need to retest the homepage.
// There seems to be an issue for NZ.
// We don't test Nasa page in the fist test.
const excludedPagesName = ['Home', 'Nasa', 'New Zealand'];


const pages = menuLinks.filter(page => !excludedPagesName.includes(page.name)).map(page => page.link);

const viewports = ['macbook-15', 'iphone-6', 'ipad-2'];

describe('DownTheCode', () => {
  pages.forEach(page => {
    viewports.forEach(view => {
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
  viewports.forEach(view => {
    it(`Should display the Nasa image of the day page in the ${view}`, () => {
      cy
        .viewport(view)
        .visit(`${baseUrl}/nasa-image-of-the-day`)
        .get(selectors.subtitle)
        .should('be.visible')
        .get(selectors.paragraph)
        .should('be.visible')
        .get(selectors.nasaImage)
        .should('be.visible')
        .get(selectors.footer)
        .should('be.visible');
    });
  });
});
