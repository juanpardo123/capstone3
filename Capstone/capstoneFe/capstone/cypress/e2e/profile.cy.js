describe('Profile Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); 
    cy.window().then((win) => {
      win.localStorage.setItem('userInfo', JSON.stringify({
        id: 1,
        username: "MichaelTester",
        email: "michael@test.com"
      }));
      win.localStorage.setItem('authenticated', 'true');
    });
    cy.reload();
  });

  it('should display the profile information', () => {
    cy.get('h1').contains('Profile').should('be.visible');
    cy.get('p').contains('Username: MichaelTester').should('be.visible');
    cy.get('p').contains('Email: michael@test.com').should('be.visible');
  });

  it('should allow the user to update their profile information', () => {
    cy.get('input[name="username"]').clear().type('NewUsername').should('have.value', 'NewUsername');
    cy.get('input[name="email"]').clear().type('newemail@test.com').should('have.value', 'newemail@test.com');
    cy.get('button').contains('Update Profile').click();

    cy.get('p').contains('Username: NewUsername').should('be.visible');
    cy.get('p').contains('Email: newemail@test.com').should('be.visible');
  });

  it('should navigate back to home page when Home link is clicked', () => {
    cy.get('a.link').contains('Home').click();
    cy.url().should('include', '/');
    cy.get('h1').contains('Home').should('be.visible');
  });
});