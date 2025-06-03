# ClickUp API Tests

This project contains automated tests for the ClickUp API using Cypress and TypeScript.

## Prerequisites

1. Node.js installed (v14 or later).
2. Cypress installed (`npm install` automatically handles this).
3. A valid ClickUp API token.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/clickup-api-tests.git
   cd clickup-api-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```plaintext
   ACCESS_TOKEN=your_clickup_access_token
   TEAM_ID=your_team_id
   ```

4. Run Cypress Test Runner:
   ```bash
   npm run open
   ```

5. Or run tests in headless mode:
   ```bash
   npm test
   ```

## Test Files

- `cypress/e2e/goals.cy.ts`: Tests for the ClickUp Goals API lifecycle.

## Notes

- Make sure your API token and team ID are valid before running the tests.
- Check the official [ClickUp API documentation](https://developer.clickup.com/reference) for more details.
