const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('init', () => {
        it('should require a GitHub username', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com',jasminbouasavatdy);
            expect('github' in engineer).toBe(true);
        });
    });
    
    describe('getGitHub', () => {
        it('should return the GitHub username', () => {
            const engineer = new Engineer('Jasmin', 1, 'jasminbousavatdy@hotmail.com',jasminbouasavatdy);

            expect(engineer.getGithub()).toBe('Engineer');
        });
    });
});