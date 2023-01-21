// Optional: configure or set up a testing framework before each test.
// Polyfill "window.fetch" used in the React component.
import "whatwg-fetch";
import "jest-canvas-mock";

// Extend Jest "expect" functionality with Testing Library assertions.
import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
