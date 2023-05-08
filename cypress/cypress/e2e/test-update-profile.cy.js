
import faker from 'faker';

describe('Update Profile', () => {

    const name = faker.name.findName();
    const location = faker.address.city();
    const website = faker.internet.url();
    const username = faker.internet.userName();
    const bio = faker.lorem.sentences(2);
    const oldPassword = 'Leonardo92%';
  
    beforeEach(function () {
      cy.visit('http://localhost:2368/ghost/#/signin'); // Replace with the URL of your Ghost instance
      cy.get('input[name="identification"]').type('f.castagnola@uniandes.edu.co'); // Replace with your Ghost admin username
      cy.get('input[name="password"]').type(oldPassword); // Replace with your Ghost admin password
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/site');
    });
  
    it('Updates the profile fields', () => {
      cy.visit('http://localhost:2368/ghost/#/staff/fabio');
      cy.get('input[id="user-name"]').scrollIntoView().clear().type(name, { force: true });
      cy.get('input[id="user-location"]').scrollIntoView().clear().type(location, { force: true });
      cy.get('input[name="user"]').scrollIntoView().clear().type('fabio', { force: true });
      cy.get('input[id="user-website"]').scrollIntoView().clear().type(website, { force: true });
      cy.get('input[name="user[facebook]"]').scrollIntoView().clear().type(username, { force: true });
      cy.get('input[name="user[twitter]"]').scrollIntoView().clear().type(username, { force: true });
      cy.get('textarea[id="user-bio"]').clear().type(bio, { force: true });
  
      cy.contains('button', 'Save').click();
      cy.contains('button', 'Saved');
    });
  
  
    it('Verifies that fields are updated correctly', () => {
      cy.visit('http://localhost:2368/ghost/#/staff/fabio');
      cy.get('input[id="user-name"]').scrollIntoView().should('have.value', name);
      cy.get('input[id="user-location"]').scrollIntoView().should('have.value', location);
      cy.get('input[name="user"]').scrollIntoView().should('have.value', 'fabio');
      cy.get('input[id="user-website"]').scrollIntoView().should('have.value', website);
      cy.get('input[name="user[facebook]"]').scrollIntoView().should('have.value', `https://www.facebook.com/${username}`);
    //cy.get('input[name="user[twitter]"]').scrollIntoView().should('have.value', `https://twitter.com/${username}`);
      cy.get('textarea[id="user-bio"]').scrollIntoView().should('have.value', bio);
    });
  });