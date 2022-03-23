const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('init', () => {
        it('should require name, id, and email', () => {
            const employee = new Employee('Jasmin', 1, 'jasminbousavatdy@hotmail.com');
            expect('name' in employee).toBe(true);
            expect('id' in employee).toBe(true);
            expect('email' in employee).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name of the Employee', () => {
            const employee = new Employee('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(employee.getName()).toBe('Jasmin');
        });
    });
    describe('getId', () => {
        it('should return the id', () => {
            const employee = new Employee('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(employee.getId()).toBe(1);
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Employee('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(manager.getRole()).toBe('Employee');
        });
    });
});