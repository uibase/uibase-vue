module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@helper/(.*)$': '<rootDir>/src/helpers/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@util/(.*)$': '<rootDir>/src/utils/$1',
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'jsx', 'ts', 'tsx'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(ejs|svg)$': 'jest-raw-loader'
  },
  collectCoverage: false,
  collectCoverageFrom: []
}
