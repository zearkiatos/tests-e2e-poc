describe('Update Password', () => {
  const oldPassword = 'Leonardo92%';
  const newPassword ="Leonardo91%"
  beforeEach(function () {
    cy.visit('http://localhost:2368/ghost/#/signin'); // Replace with the URL of your Ghost instance
    cy.get('input[name="identification"]').type('f.castagnola@uniandes.edu.co'); // Replace with your Ghost admin username
    cy.get('input[name="password"]').type(oldPassword); // Replace with your Ghost admin password
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/site');
  });
  
  it('Can change password', () => {
    cy.visit('/ghost/#/staff/fabio');
    cy.get('[id="user-password-old"]').scrollIntoView().clear().type(oldPassword, { force: true });
    cy.get('[id="user-password-new"]').scrollIntoView().clear().type(newPassword, { force: true });
    cy.get('[id="user-new-password-verification"]').scrollIntoView().clear().type(newPassword, { force: true });
    cy.contains('button', 'Change Password').click();
    cy.contains('button', 'Saved');
  });
});