describe("Regenerate Toke",() => {
    const oldPassword = 'Leonardo92%';
    beforeEach(function () {
      cy.visit('http://localhost:2368/ghost/#/signin'); // Replace with the URL of your Ghost instance
      cy.get('input[name="identification"]').type('f.castagnola@uniandes.edu.co'); // Replace with your Ghost admin username
      cy.get('input[name="password"]').type(oldPassword); // Replace with your Ghost admin password
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/site');
    });
  
    it('Can regenerate token', () => {
      cy.visit('/ghost/#/staff/fabio');
      cy.get('input#personal-token').invoke('val').then(oldToken => {
        cy.contains('button', 'Regenerate').click();
        cy.contains('button', 'Regenerate your Personal Token').click();
        cy.contains('p', 'Personal Token was successfully regenerated');
        cy.get('input#personal-token').invoke('val').then(newToken => {
          expect(oldToken).not.to.equal(newToken);
        });
      });
    });
  })
  