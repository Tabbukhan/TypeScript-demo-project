import { greet } from './index.js';

describe('greet function', () => {
  it('should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
