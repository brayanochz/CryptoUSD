const nextJest = require("next/jest")
const dotenv = require("dotenv")
/*import dotenv from 'dotenv';*/

dotenv.config({ path: '.env.local' });

const createJestConfig = nextJest({
  dir: "./"
})

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig)