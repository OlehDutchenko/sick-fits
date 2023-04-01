const nextJest = require('next/jest');

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

const customJestConfig = {
	clearMocks: true,
	collectCoverage: true,
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'<rootDir>/jest.setup.js',
	],
	cacheDirectory: '<rootDir>/.cache/jest',
	coverageReporters: ['json-summary', 'lcov'],
	displayName: 'TEST',
	testEnvironment: 'jsdom',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['tsx', 'ts', 'js', 'mjs', 'node'],
	modulePathIgnorePatterns: [
		'<rootDir>/.cache',
		'<rootDir>/.next',
		'<rootDir>/.refs',
		'<rootDir>/coverage',
		'<rootDir>/node_modules',
		'<rootDir>/src/@types',
	],
};

module.exports = createJestConfig(customJestConfig);
