const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('init', () => {
        it('should require name, id, and email', () => {
            const manager = new Manager('Baudy', 3, 'baudyh@hotmail.com');
            expect('name' in manager).toBe(true);
            expect('id' in manager).toBe(true);
            expect('email' in manager).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name of the Manager', () => {
            const manager = new Manager('Baudy', 3, 'baudyh@hotmail.com');

            expect(manager.getName()).toBe('Baudy');
        });
    });
    describe('getId', () => {
        it('should return the id', () => {
            const manager = new Manager('Baudy', 3, 'baudyh@hotmail.com');

            expect(manager.getId()).toBe(3);
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const manager = new Manager('Baudy', 3, 'baudyh@hotmail.com');

            expect(manager.getRole()).toBe('Manager');
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Manager('Baudy', 3, 'baudyh@hotmail.com');

            expect(manager.getRole()).toBe('Manager');
        });
    });
});