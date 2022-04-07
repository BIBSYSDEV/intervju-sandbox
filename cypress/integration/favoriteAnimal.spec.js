context('Favorite animal application test', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('possible to interact with page', () => {
    cy.get('[data-testid="title"]').should('have.text', 'Hva er ditt favorittdyr?');
    cy.get('[data-testid="first-name-input').type('abc');
    cy.get('[data-testid="show-animal-button"]').click();
  });
});
