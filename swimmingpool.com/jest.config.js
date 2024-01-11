/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line unicorn/prefer-module
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(css)$': 'jest-transform-css',
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
