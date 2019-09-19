const selector = require('../fixtures/selectors.json');

const viewport = ['macbook-15', 'iphone-6', 'ipad-2'];

describe('DownTheCode Home Page', () => {
  before(() => {
    cy.visit('http://localhost:8000/');
    cy.title().should('equal', '');
    cy.get('h1').should('contain', '');
  });

  viewport.forEach(view => {
    before(() => {
      cy.viewport(view);
    });

    it(`Should display the home page title in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
    it(`Should display the correct navigation menu in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
    it(`Should display the side bar elements in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
    it(`Should display the weather for the location XX in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
    it(`Should display the Coogee image in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
    it(`Should display the footer in the view: ${view}`, () => {
      // cy
      //   .get(selector.toggleMenuSingle)
      //   .click()
      //   .click()
      //   .get(selector.menuSingle)
      //   .should('not.be.visible')
      //   // to be sure it says focus and the menu is closed
      //   .get(selector.singleSelectSingleInput)
      //   .trigger('mousedown')
      //   .get(selector.menuSingle)
      //   .should('not.be.visible');
    });
  });
});
