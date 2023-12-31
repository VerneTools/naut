module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.unit.test.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/**/*.config.ts',
    '!src/**/config.ts',
    '!**/entity.ts',
    '!**/query-model.ts',
    '!**/use-case.ts',
    '!**/*.repository.ts',
    '!**/*.fixture.ts',
    '!**/*.mock.ts',
    '!**/*.error.ts',
    '!**/*.errors.ts',
    '!**/__tests__/**',
    '!**/__mocks__/**',
    '!src/**/*.enums.ts',
    '!src/**/enums.ts',
    '!src/**/*.dtos.ts',
    '!src/**/*.types.ts',
    '!src/**/repository.ts',
    '!src/**/collection.source.ts',
    '!src/**/rpc.source.ts',
    '!**/contract.service.ts',
    '!src/**/abi.service.ts',
    '!src/**/blockchain.service.ts',
    '!src/**/smart-contract.service.ts',
    '!src/**/mapper.ts',
    '!src/**/data.source.ts',
    '!src/**/query-builders.ts',
    '!src/**/serializer.ts',
    '!src/**/dependency-injector.ts',
    '!src/**/route-io.ts',
    '!src/**/block-reader.ts',
  ],
};
