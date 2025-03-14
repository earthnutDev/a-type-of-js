/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default () => {
  return {
    collectCoverage: true,
    collectCoverageFrom: ['index.ts', '!**/node_modules/**', '!**/vendor/**'],
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/', 'test', '.*.d.ts'],
    coverageReporters: ['text', 'lcov', 'html', 'text-summary'],
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          isolatedModules: true,
          tsconfig: 'tsconfig.json',
        },
      ],
    },
    testMatch: ['**/*.test.(js|ts|tsx)'],
  };
};
