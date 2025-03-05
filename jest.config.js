/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default () => {
  return {
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
    testMatch: ['**/__tests__/**/*.test.(js|ts|tsx)'],
  };
};
