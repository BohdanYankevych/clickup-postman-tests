
Cypress.Commands.add('createGoal', (name: string) => {
    return cy.request({
        method: 'POST',
        url: '/goal',
        headers: {
            Authorization: Cypress.env('apiToken')
        },
        body: {
            name,
            team_id: Cypress.env('teamId'),
            due_date: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week from now
            description: 'Test goal created by Cypress'
        }
    });
});

Cypress.Commands.add('getGoal', (goalId: string) => {
    return cy.request({
        method: 'GET',
        url: `/goal/${goalId}`,
        headers: {
            Authorization: Cypress.env('apiToken')
        }
    });
});

Cypress.Commands.add('getGoals', () => {
    return cy.request({
        method: 'GET',
        url: `/goal?team_id=${Cypress.env('teamId')}`,
        headers: {
            Authorization: Cypress.env('apiToken')
        }
    });
});

Cypress.Commands.add('updateGoal', (goalId: string, name: string) => {
    return cy.request({
        method: 'PUT',
        url: `/goal/${goalId}`,
        headers: {
            Authorization: Cypress.env('apiToken')
        },
        body: {
            name
        }
    });
});

Cypress.Commands.add('deleteGoal', (goalId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `/goal/${goalId}`,
        headers: {
            Authorization: Cypress.env('apiToken')
        }
    });
});

// 🧠 TypeScript Declaration for Custom Commands
declare global {
    namespace Cypress {
        interface Chainable {
            createGoal(name: string): Chainable<any>;
            getGoal(goalId: string): Chainable<any>;
            getGoals(): Chainable<any>;
            updateGoal(goalId: string, name: string): Chainable<any>;
            deleteGoal(goalId: string): Chainable<any>;
        }
    }
}

export {};
