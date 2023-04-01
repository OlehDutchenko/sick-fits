const { useRouter, default: Router } = require('next-router-mock');

if (typeof jest !== 'undefined') {
	jest.useFakeTimers();
	jest.mock('next/router', () => ({
		__esModule: true,
		Router,
		useRouter,
	}));

	if (typeof window !== 'undefined') {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation((query) => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(),
				removeListener: jest.fn(),
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	}
}
