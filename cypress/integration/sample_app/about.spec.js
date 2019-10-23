/// <reference types="Cypress" />

context('About Page', () => {
    beforeEach(() => {
      cy.visit('/about')
    })
  
    it('has link to image on about page', () => {
     cy.get('img');
    })
     
    it('has link to table on about page', () => {
     cy.get('table');
    })

    it('has link to the list on about page', () => {
      cy.get('li');
     })

       

    })
  