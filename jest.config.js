/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default () => {
  return {
    collectCoverage: true,
    collectCoverageFrom: ['index.ts'],
    coverageReporters: ['text', 'lcov', 'html', 'text-summary'],
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
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/', 'test', '.*.d.ts'],
  };
};
