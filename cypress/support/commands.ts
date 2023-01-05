/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Visit the home page of the app
       *
       * @returns {typeof login}
       * @memberof Chainable
       * @example
       *    cy.visitHome()
       */
      visitHome: typeof visitHome;
    }
  }
}

function visitHome() {
  cy.visit("http://localhost:1234");
}

Cypress.Commands.add("visitHome", visitHome);
