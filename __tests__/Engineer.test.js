const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('init', () => {
        it('should require name, id, and email', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com');
            expect('name' in engineer).toBe(true);
            expect('id' in engineer).toBe(true);
            expect('email' in engineer).toBe(true);
        });
    });
    describe('getName', () => {
        it('should return the name of the Engineer', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(engineer.getName()).toBe('Jasmin');
        });
    });
    describe('getId', () => {
        it('should return the id', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(engineer.getId()).toBe(1);
        });
    });
    describe('getRole', () => {
        it('should return the role', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(engineer.getRole()).toBe('Engineer');
        });
    });
    describe('getEmail', () => {
        it('should return the email', () => {
            const manager = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com');

            expect(manager.getRole()).toBe('Engineer');
        });
    });
});