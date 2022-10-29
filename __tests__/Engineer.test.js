const Engineer = require('../lib/Engineer');

test('create gitHub', () => {

    const gitHubAccount = 'david';
    const enginneer= new Engineer('David', 4, 'david@gmail.com', gitHubAccount);
    expect(enginneer.gitHub).toBe(gitHubAccount);

})

test('checks if getGithub() return GitHub', () => {

    const gitHubAccount = 'david';
    const enginneer = new Engineer('David', 4, 'david@gmail.com', gitHubAccount);
    expect(enginneer.getGitHub()).toBe(gitHubAccount);

});

test('checks if getRole() returns Engineer', () => {

    const role = 'Engineer';
    const enginneer = new Engineer('David', 4, 'david@gmail.com', 'david');
    expect(enginneer.getRole()).toBe(role);

});