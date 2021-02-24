// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('arithmetical operations should update display with result of operation', () => {
    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('operations should be chained together', () => {
    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator_subtract').click()
    cy.get('#number7').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('output should be a decimal', () => {
    cy.get('#number3').click()
    cy.get('#operator_divide').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '1.5')
  })

  it('output should be a negative number', () => {
    cy.get('#number3').click()
    cy.get('#operator_subtract').click()
    cy.get('#number4').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '-1')
  })

  it('output should be a large number', () => {
    cy.get('#number9').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_multiply').click()
    cy.get('#number4').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', '360000000')
  })
  
  it('should divide by zero', () => {
    cy.get('#number3').click()
    cy.get('#operator_divide').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').should('contain', 'error')
  }) 
})
