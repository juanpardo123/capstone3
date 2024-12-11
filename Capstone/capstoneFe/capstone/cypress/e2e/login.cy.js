describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login'); 
  });

  it('should display the login form', () => {
    cy.get('.login-holder').should('be.visible');
    cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Enter text 1');
    cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Enter text 1');
    cy.get('button').contains('Log in').should('be.visible');
  });

  it('should allow the user to enter username and password', () => {
    cy.get('input[type="text"]').type('MichaelTester').should('have.value', 'MichaelTester');
    cy.get('input[type="password"]').type('password123').should('have.value', 'password123');
  });

  it('should log in the user when the login button is clicked', () => {
    cy.get('input[type="text"]').type('MichaelTester');
    cy.get('input[type="password"]').type('password123');
    cy.get('button').contains('Log in').click();

    
    cy.url().should('include', '/'); 
    cy.get('h1').contains('Home').should('be.visible');
    cy.get('p').contains('Welcome, MichaelTester!').should('be.visible');
  });
});