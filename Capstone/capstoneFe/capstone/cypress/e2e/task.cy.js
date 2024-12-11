describe('Task Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/task'); 
    cy.window().then((win) => {
      win.localStorage.setItem('userInfo', JSON.stringify({
        id: 1,
        username: "MichaelTester",
        email: "michael@test.com"
      }));
      win.localStorage.setItem('authenticated', 'true');
      win.localStorage.setItem('currentTask', JSON.stringify({
        id: 1,
        userId: null,
        name: "Clean the gutters",
        description: "Make your own description here",
        imageUrl: "null",
        frequencyId: 1,
        preferred: false,
        completed: false,
        steps: [
          {
            id: 1,
            sequence: 1,
            name: "Grab a ladder",
            description: "make a better one",
            imageUrl: "link",
            taskId: 1
          },
          {
            id: 2,
            sequence: 2,
            name: "Grab some gloves",
            description: "make a better one",
            imageUrl: "link",
            taskId: 1
          }
        ]
      }));
    });
    cy.reload();
  });

  it('should display the task details', () => {
    cy.get('h1').contains('Task Details').should('be.visible');
    cy.get('h2').contains('Clean the gutters').should('be.visible');
    cy.get('p').contains('Make your own description here').should('be.visible');
    cy.get('img').should('have.attr', 'src', 'null');
  });

  it('should display the steps for the task', () => {
    cy.get('.stepHolder .step').should('have.length', 2);
    cy.get('.stepHolder .step').first().within(() => {
      cy.get('h3').contains('Step: 1 Grab a ladder').should('be.visible');
      cy.get('p').contains('make a better one').should('be.visible');
      cy.get('img').should('have.attr', 'src', 'link');
    });
    cy.get('.stepHolder .step').last().within(() => {
      cy.get('h3').contains('Step: 2 Grab some gloves').should('be.visible');
      cy.get('p').contains('make a better one').should('be.visible');
      cy.get('img').should('have.attr', 'src', 'link');
    });
  });

  it('should navigate back to home page when Home link is clicked', () => {
    cy.get('a.link').contains('Home').click();
    cy.url().should('include', '/');
    cy.get('h1').contains('Home').should('be.visible');
  });
});