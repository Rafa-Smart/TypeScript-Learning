"use strict";
// contohnya
describe('hello', () => {
    it('should return hello world', () => {
        const hello = 'Hello, World!';
        expect(hello).toBe('Hello, World!');
    });
    it('should return a greeting message', () => {
        const name = 'Rafa';
        const greeting = `Hello, ${name}!`;
        expect(greeting).toBe('Hello, Rafa!');
    });
});
