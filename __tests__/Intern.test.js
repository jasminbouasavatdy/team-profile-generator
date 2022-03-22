const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('init', () => {
        it('should require name, id, and email', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com');
            expect('name' in intern).toBe(true);
            expect('id' in intern).toBe(true);
            expect('email' in intern).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name of the Intern', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com');

            expect(intern.getName()).toBe('Billy');
        });
    });
    describe('getId', () => {
        it('should return the id', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com');

            expect(intern.getId()).toBe(2);
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com');

            expect(intern.getRole()).toBe('Intern');
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Intern('Billy', 2, 'billyk@hotmail.com');

            expect(manager.getRole()).toBe('Intern');
        });
    });
});