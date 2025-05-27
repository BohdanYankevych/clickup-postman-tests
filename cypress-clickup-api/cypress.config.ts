import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config(); // Завантаження змінних з .env файлу

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.clickup.com/api/v2',
    supportFile: 'cypress/support/commands.ts',
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    TEAM_ID: process.env.TEAM_ID,
  },
});
