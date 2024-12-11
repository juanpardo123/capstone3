describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); 
    cy.window().then((win) => {
      win.localStorage.setItem('userInfo', JSON.stringify({
        id: 1,
        username: "MichaelTester",
        email: "michael@test.com"
      }));
      win.localStorage.setItem('authenticated', 'true');
      win.localStorage.setItem('userTasks', JSON.stringify([
        {
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
        },
        {
          id: 2,
          userId: null,
          name: "Christmas decorations",
          description: "Make your own description here2",
          imageUrl: "null",
          frequencyId: 1,
          preferred: false,
          completed: false,
          steps: [
            {
              id: 3,
              sequence: 1,
              name: "Get a tree",
              description: "make a better one",
              imageUrl: "link",
              taskId: 2
            }
          ]
        }
      ]));
    });
    cy.reload();
  });

  it('should display the home page', () => {
    cy.get('h1').contains('Home').should('be.visible');
    cy.get('p').contains('Welcome, MichaelTester!').should('be.visible');
    cy.get('p').contains('Email: michael@test.com').should('be.visible');
  });

  it('should navigate to task details page when a task is clicked', () => {
    cy.get('.taskHolder .incomplete.task').first().click();
    cy.url().should('include', '/task-details');
    cy.get('h1').contains('Task Details').should('be.visible');
  });

  it('should display incomplete tasks', () => {
    cy.get('.taskholder .incomplete.task').should('have.length', 2);
    cy.get('.taskholder .incomplete.task').first().within(() => {
      cy.get('h2').contains('Clean the gutters').should('be.visible');
      cy.get('p').contains('Make your own description here').should('be.visible');
      cy.get('img').should('have.attr', 'src', 'null');
    });
    cy.get('.taskHolder .incomplete.task').last().within(() => {
      cy.get('h2').contains('Christmas decorations').should('be.visible');
      cy.get('p').contains('Make your own description here2').should('be.visible');
      cy.get('img').should('have.attr', 'src', 'null');
    });
  });

  it('should display steps for the tasks', () => {
    cy.get('.taskHolder .incomplete.task').first().within(() => {
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
  });

  
});