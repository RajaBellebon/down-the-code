import { baseUrl } from '../../cypress.json';
import { selectors } from '../fixtures/selectors';


const viewports = ['macbook-15', 'iphone-6', 'ipad-2'];

describe('DownTheCode Home Page', () => {
  before(() => {
    cy.visit(baseUrl);
    cy.title().should('equal', 'Down the Code');
    cy.get('h1').should('contain', 'Down the Code');
  });

  viewports.forEach(view => {
    before(() => {
      cy.viewport(view);
    });

    it(`Should display the home page in the view: ${view}`, () => {
      cy
        .visit(baseUrl)
        .get(selectors.subtitle)
        .should('contain', 'Welcome to Down the Code!')
        .get(selectors.paragraph)
        .should(
          'contain',
          'Enjoy the pics of our different travels',
        )
        .get(selectors.image)
        .should('be.visible')
        .get(selectors.footer)
        .should('be.visible');
    });

    it(`Should display the about-us page in the view: ${view}`, () => {
      cy
        .visit(`${baseUrl}/about-us`)
        .get(selectors.subtitle)
        .should('contain', 'About us')
        .get(selectors.image)
        .should('be.visible')
        .get(selectors.footer)
        .should('be.visible');
    });
  });
});