describe('Display About content', () => {
    const oldPassword = 'Leonardo92%';
    beforeEach(function () {
      cy.visit('http://localhost:2368/ghost/#/signin'); // Replace with the URL of your Ghost instance
      cy.get('input[name="identification"]').type('f.castagnola@uniandes.edu.co'); // Replace with your Ghost admin username
      cy.get('input[name="password"]').type(oldPassword); // Replace with your Ghost admin password
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/site');
    });
  
    it('displays the correct header', () => {
      cy.visit('/ghost/#/about');
      cy.get('header').should("exist");
    });
  
    it('displays the correct footer', () => {
      cy.visit('/ghost/#/about');
      cy.get('footer').should("exist");
    });
  
    it('displays the correct details', () => {
      cy.visit('/ghost/#/about');
      cy.get('.gh-env-details').should('contain.text', '\n            \n                Version 3.41.1\n                Environment development\n                Database sqlite3\n                Mail Direct\n            \n            \n                User Documentation\n                Get Help With Ghost\n            \n        ');
    });
  
  });
  