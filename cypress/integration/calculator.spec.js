describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should update the display with the result of the operation with arithmetical operations', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '8')
  })
  
  it('should chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '28')
  })
  
  it('should have an expected outcome for a range of numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4.5')
  })
  
  it('should display 0 when dividing by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })


})