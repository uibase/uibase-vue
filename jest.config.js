module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@types/(.*)$': '<rootDir>/src/theme/types/$1',
    '^@uiConfig/(.*)$': '<rootDir>/src/theme/types/config/$1',
    '^@factory/(.*)$': '<rootDir>/src/factories/$1',
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
    '\\.ejs$': 'jest-raw-loader'
  },
  collectCoverage: false,
  collectCoverageFrom: []
}
