describe('Ghost Resources page', () => {
    beforeEach(() => {
      cy.visit('https://ghost.org/resources/');
    });
  
  
    it('Should display the main page title', () => {
      cy.get('h1').should('have.text', 'Start here.');
    });
  
    it('Displays the correct page header', () => {
      cy.contains('h1', 'Start here.');
    });
  
    it('Displays at least footer', () => {
      cy.get('footer').should('exist');
    });
  
    it('Should display the value of footer', () => {
      cy.get('footer').should('have.text', "\n    \n        \n            \n                    Product Updates\n    Help Center\n    @Ghost\n\n            \n            \n                Published with Ghost\n            \n        \n    \n");
    });
  
    it('Shoiuld exist serach input', () => {
      cy.get('input[id="search-input"]').should('exist');
    });
  
  });