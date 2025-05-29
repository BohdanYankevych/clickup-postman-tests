describe('🧪 ClickUp Goal API Full Lifecycle', () => {
    let goalId: string;
    const initialName = '🎯 Cypress Goal';
    const updatedName = '🎯 Updated Cypress Goal';

    it('1️⃣ Create Goal', () => {
        cy.createGoal(initialName).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.goal.name).to.eq(initialName);
            goalId = res.body.goal.id;
        });
    });

    it('2️⃣ Get Created Goal', () => {
        cy.getGoal(goalId).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.goal.id).to.eq(goalId);
        });
    });

    it('3️⃣ Update Goal', () => {
        cy.updateGoal(goalId, updatedName).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.goal.name).to.eq(updatedName);
        });
    });

    it('4️⃣ Get All Goals', () => {
        cy.getGoals().then((res) => {
            expect(res.status).to.eq(200);
            const goals = res.body.goals;
            expect(goals.some((g: any) => g.id === goalId)).to.be.true;
        });
    });

    it('5️⃣ Try request with invalid token', () => {
        cy.request({
            method: 'GET',
            url: `/goal?team_id=${Cypress.env('teamId')}`,
            failOnStatusCode: false,
            headers: {
                Authorization: 'Bearer invalid_token'
            }
        }).then((res) => {
            expect(res.status).to.eq(401);
        });
    });

    it('6️⃣ Delete Goal', () => {
        cy.deleteGoal(goalId).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    it('7️⃣ Confirm deletion', () => {
        cy.request({
            method: 'GET',
            url: `/goal/${goalId}`,
            failOnStatusCode: false,
            headers: {
                Authorization: Cypress.env('apiToken')
            }
        }).then((res) => {
            expect(res.status).to.eq(404);
        });
    });
});
console.log('🚀 Cypress Token:', Cypress.env('apiToken'));
console.log('👥 Cypress Team ID:', Cypress.env('teamId'));
