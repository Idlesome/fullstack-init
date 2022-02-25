module.exports = {
  // Enable ts testing with js support
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@test-utils/(.*)$": "<rootDir>/test-utils/$1",
  },
};
