const selector = require('../fixtures/selectors.json');

const viewport = ['macbook-15', 'iphone-6', 'ipad-2'];

const pages = [''];
//TODO: https://github.com/RajaBellebon/tulec/issues/11
describe.skip('DownTheCode', () => {
  before(() => {
    cy.visit('http://localhost:8000/');
    cy.title().should('equal', '');
    cy.get('h1').should('contain', '');
  });
  pages.forEach(page => {
    viewport.forEach(view => {
      before(() => {
        cy.viewport(view);
      });

      it(`Should display the page: ${page} in the ${view}`, () => {
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
      it(`Should display NT`, () => {
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
      it(`Should display the side bar elements`, () => {
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
      it(`Should display the weather for the location XX`, () => {
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
      it(`Should display the Coogee image`, () => {
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
      it(`Should display the footer`, () => {
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
});
