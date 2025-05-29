import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    e2e: {
        baseUrl: process.env.CYPRESS_BASE_URL,
        env: {
            apiToken: process.env.CYPRESS_API_TOKEN,
            teamId: process.env.CYPRESS_TEAM_ID
        },
        supportFile: 'cypress/support/e2e.ts', // 👈 важливо!
        setupNodeEvents(on, config) {
            return config;
        }
    }
});

