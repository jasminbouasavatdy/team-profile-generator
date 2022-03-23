const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('init', () => {
        it('should require a school', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com', 'UNCC');
            expect('school' in intern).toBe(true);
           
        });
    });
    
    describe('getSchool', () => {
        it('should return the email', () => {
            const intern = new Intern('Billy', 2, 'billyk@hotmail.com', 'UNCC');

            expect(intern.getRole()).toBe('UNCC');
        });
    });
});