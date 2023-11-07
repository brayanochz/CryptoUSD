const nextJest = require("next/jest")
const dotenv = require("dotenv")

dotenv.config({ path: '.env.test' });

const createJestConfig = nextJest({
  dir: "./src/"
})

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig)