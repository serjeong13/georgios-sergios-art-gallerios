const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "@testing-library/jest-dom/extend-expect"],

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
  },
  
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",  // if you're using CSS modules
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js" // to mock static asset imports
  },
  
  testEnvironment: "jest-environment-jsdom", // Next.js runs in a browser environment, so this is required
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

