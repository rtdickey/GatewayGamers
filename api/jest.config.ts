import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

export default config;
