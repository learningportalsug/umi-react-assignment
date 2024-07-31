describe('User List and Details', () => {
    it('should display a list of users', () => {
      // Assuming there are 10 users
      cy.visit('http://localhost:3000');
      cy.get('.user-card').should('have.length', 10);
      cy.get('.user-card').first().click();
      cy.contains('Posts by').should('be.visible');
      cy.get('button').contains('Back').click();
      cy.get('.user-card').should('have.length', 10);
    });
  });