describe('Example Test', () => {
  it('outputs equilateral message', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="x-field"]').type('5');
    cy.get('[data-testid="y-field"]').type('5');
    cy.get('[data-testid="z-field"]').type('5');

    cy.get('[data-testid="submit-btn"]').click();

    cy.get('[data-testid="result-title"]').should('contain', 'Equilateral');
  })
})