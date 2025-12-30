module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-safe-area-context)/)',
  ],
  moduleNameMapper: {
    '^@nova/(.*)$': '<rootDir>/lib/components/$1',
  },
};
