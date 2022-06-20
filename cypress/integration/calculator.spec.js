describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  //Addition
  it('should update the display with the result of the operation with addition operation', () => {
    cy.get('#number9').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

   //Substraction
   it('should update the display with the result of the operation with substraction operation', () => {
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })

   //Multiplication
   it('should update the display with the result of the operation with multiplication operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
  })

   //Division
   it('should update the display with the result of the operation with division operation', () => {
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })
  
  it('should chain multiple operations together', () => {
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })
  
  //Positive numbers
  it('should have an expected outcome for positive numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21');
  })
  
  //Negative numbers
  it('should have an expected outcome for negative numbers', () => {
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-11')
  })

  //Numbers with Decimals
  it('should have an expected outcome for numbers with decimals', () => {
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.5')
  })

  //Very large numbers
  it('should have an expected outcome for very large numbers', () => {
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '678800')
  })

  it('should display 0 when dividing by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })


})