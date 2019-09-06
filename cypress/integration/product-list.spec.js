describe('The Product List Page Load', function() {

  it('Product List Page', function() {

    cy.visit(Cypress.config().baseUrl);

    // Assert initial load has 6 results.
    cy.get('[data-test=product-item]').should('have.length', 6);
    
  });
});