/// <reference types="Cypress" />

context('Test Automation', () => {
    beforeEach(() => {
      cy.visit('https://ragavendra2018-3.herokuapp.com/')
    })
  
    it('has link to Todo page', () => {
     
        cy.get('[routerlink="/todos"]').should('contain.text','Todos');
    })

    it('has link to stopwatch', () => {
        cy.get('[routerlink="/stopwatch"]').should('contain.text','Stopwatch');
        cy.wait(5000);
      })
    })
  