/// <reference types="cypress" />

describe('Check if username appeared in “Site navigation (Header)” menu', () => {
    let user;

    before('Visit web-site', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=fu5yos');
      cy.task("freshUser").then((object) => {
        user = object;
    });

    });
    it('Follow the next steps', () => {
      cy.get(':nth-child(3) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type(user.username);
      cy.get(':nth-child(2) > .form-control').type(user.email);
      cy.get(':nth-child(3) > .form-control').type(user.password);
      cy.get('.btn').click();
      cy.wait(20000);
      cy.get('.navbar').contains(user.username).should('exist');
    });
  })