/// <reference types="cypress" />

describe('Check if username appeared in “Site navigation (Header)” menu', () => {

  before('Visit web-site', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=fu5yos');

  });
  it('Follow the next steps', () => {
    cy.get(':nth-child(1) > .form-control').type('sea@horse.com');
    cy.get(':nth-child(2) > .form-control').type('1qaz2wsx');
    cy.get('.btn').click()
    cy.wait(10000);
    cy.get('.navbar').contains('Seahorse').should('exist');
  });
})