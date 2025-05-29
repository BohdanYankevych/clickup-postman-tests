describe('ClickUp API Goals Tests', () => {
    let goalId: string;

    const baseUrl = 'https://api.clickup.com/api/v2';
    const headers = {
        Authorization: `Bearer ${Cypress.env('ACCESS_TOKEN')}`,
        'Content-Type': 'application/json'
    };
    const teamId = Cypress.env('TEAM_ID');

    before(() => {
        cy.log(`Base URL: ${baseUrl}`);
        cy.log(`ACCESS_TOKEN: ${Cypress.env('ACCESS_TOKEN')}`);
        cy.log(`TEAM_ID: ${Cypress.env('TEAM_ID')}`);

        expect(Cypress.env('ACCESS_TOKEN')).to.not.be.undefined;
        expect(Cypress.env('TEAM_ID')).to.not.be.undefined;
    });

    it('Should create a new goal', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/team/${teamId}/goal`,
            headers,
            body: {
                name: 'Test Goal',
                description: 'my goal description',
                due_date: null,
                multiple_owners: false
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Response Status: ${response.status}`);
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(200);
            goalId = response.body.goal.id;
            expect(goalId).to.not.be.undefined;
        });
    });

    it('Should retrieve the created goal', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/team/${teamId}/goal/${goalId}`,
            headers,
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Response Status: ${response.status}`);
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(200);
            expect(response.body.goal.name).to.eq('Test Goal');
        });
    });

    it('Should fail to retrieve a goal with an invalid token', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/team/${teamId}/goal/${goalId}`,
            headers: {
                Authorization: 'Bearer invalid_token'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Response Status: ${response.status}`);
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(401);
        });
    });

    it('Should update the goal', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/team/${teamId}/goal/${goalId}`,
            headers,
            body: {
                name: 'Updated Test Goal',
                description: 'Updated goal description'
            },
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Response Status: ${response.status}`);
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(200);
            expect(response.body.goal.name).to.eq('Updated Test Goal');
        });
    });

    it('Should delete the created goal', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/team/${teamId}/goal/${goalId}`,
            headers,
            failOnStatusCode: false
        }).then((response) => {
            cy.log(`Response Status: ${response.status}`);
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(200);
        });
    });
});
