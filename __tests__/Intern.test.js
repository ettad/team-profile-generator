const Intern = require('../lib/Intern');

test('create school', () => {
    const school = 'SMU';
    const intern = new Intern('David', 4, 'david@gmail.com', school);
    expect(intern.school).toBe(school);
});

test('check if getSchool() return school', () => {
    const school = 'SMU';
    const intern = new Intern('David', 4, 'david@gmail.com', school);
    expect(intern.getSchool()).toBe(school);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const role = 'Intern';
    const intern = new Intern('David', 4, 'david@gmail.com', 'SMU');
    expect(intern.getRole()).toBe(role);
});