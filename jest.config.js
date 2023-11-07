const nextJest = require("next/jest")
const createJestConfig = nextJest({
  dir: "./"
})

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/utils/(.*)$': '<rootDir>/utils/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/assets/(.*)$': '<rootDir>/assets/$1',
    '^@/mocks/(.*)$': '<rootDir>/mocks/$1',
    '^@/services/(.*)$': '<rootDir>/services/$1',
    '^@/schemas/(.*)$': '<rootDir>/schemas/$1',
    '^@/constants/(.*)$': '<rootDir>/constants/$1',
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig)