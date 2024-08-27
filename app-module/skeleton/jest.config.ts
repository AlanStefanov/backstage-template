import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
  },
  modulePathIgnorePatterns: ['dist/', '__mocks__'],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 80,
      statements: 80,
      functions: 80,
    },
  },
};

export default config;
