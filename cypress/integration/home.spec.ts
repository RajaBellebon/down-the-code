const selector = require('../fixtures/selectors.json');
const baseUrl = require('../../cypress.json').baseUrl;

const viewport = ['macbook-15', 'iphone-6', 'ipad-2'];

describe('DownTheCode Home Page', () => {
  before(() => {
    cy.visit(baseUrl);
    cy.title().should('equal', 'Down the Code');
    cy.get('h1').should('contain', 'Down the Code');
  });

  viewport.forEach(view => {
    before(() => {
      cy.viewport(view);
    });

    it.only(`Should display the home page in the view: ${view}`, () => {
      cy.get(selector.subtitle)
        .should('contain', 'Welcome to Down the Code!')
        .get(selector.paragraph)
        .should(
          'contain',
          'You may find couple of things on this website from blogs to pictures or data projects. Enjoy!',
        )
        .get(selector.weatherWidget)
        .should('.be.visible')
        .get(selector.image)
        .should('be.visible')
        .get(selector.imageParagraph)
        .should('contain', 'Coogee Beach at Sunrise')
        .get(selector.foother)
        .should('be.visible');
    });
  });
});
// TODO: https://github.com/RajaBellebon/tulec/issues/11
//   it(`Should display the correct navigation menu in the view: ${view}`, () => {
//     // cy
//     //   .get(selector.toggleMenuSingle)
//     //   .click()
//     //   .click()
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible')
//     //   // to be sure it says focus and the menu is closed
//     //   .get(selector.singleSelectSingleInput)
//     //   .trigger('mousedown')
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible');
//   });
//   it(`Should display the side bar elements in the view: ${view}`, () => {
//     // cy
//     //   .get(selector.toggleMenuSingle)
//     //   .click()
//     //   .click()
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible')
//     //   // to be sure it says focus and the menu is closed
//     //   .get(selector.singleSelectSingleInput)
//     //   .trigger('mousedown')
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible');
//   });
//   it(`Should display the weather for the location XX in the view: ${view}`, () => {
//     // cy
//     //   .get(selector.toggleMenuSingle)
//     //   .click()
//     //   .click()
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible')
//     //   // to be sure it says focus and the menu is closed
//     //   .get(selector.singleSelectSingleInput)
//     //   .trigger('mousedown')
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible');
//   });
//   it(`Should display the Coogee image in the view: ${view}`, () => {
//     // cy
//     //   .get(selector.toggleMenuSingle)
//     //   .click()
//     //   .click()
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible')
//     //   // to be sure it says focus and the menu is closed
//     //   .get(selector.singleSelectSingleInput)
//     //   .trigger('mousedown')
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible');
//   });
//   it(`Should display the footer in the view: ${view}`, () => {
//     // cy
//     //   .get(selector.toggleMenuSingle)
//     //   .click()
//     //   .click()
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible')
//     //   // to be sure it says focus and the menu is closed
//     //   .get(selector.singleSelectSingleInput)
//     //   .trigger('mousedown')
//     //   .get(selector.menuSingle)
//     //   .should('not.be.visible');
//   });
// });
