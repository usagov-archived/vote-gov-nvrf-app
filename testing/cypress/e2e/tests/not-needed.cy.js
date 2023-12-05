/* eslint-disable no-undef */
/// <reference types="cypress" />
const data = require("../../fixtures/data.json");

describe('Validate Not Needed', () => {
  beforeEach('login to app', () => {
    cy.visit('/')
    cy.signin(Cypress.env('username'), Cypress.env('password'))
    cy.get('[data-testid="dropdown"]').select(data.notNeeded)
  })
  it('Validate Workflow', () => {
    cy.get('[class="usa-button next-button margin-top-5"]').click()

    // Validate that state selections takes you to the not needed page 
    cy.get('h1').should('contain', 'does not have voter registration')

    // Validate that external links open in new tab
    cy.get('[class="usa-link usa-link--external"]').each(link => {
      expect(link).to.have.attr('target','_blank')
    })
  })
})