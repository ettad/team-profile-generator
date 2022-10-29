const Employee = require('../lib/Employee');

test('creates an employee object', () => {

    const employee = new Employee('Dave')
    expect(employee.name).toBe('Dave');

});

test('checkes employee id', () => {

    const id = 4;
    const employee = new Employee('David', id);
    expect(employee.id).toBe(id);

});

test('checks employee email', () => {

    const email = 'dave@gmail.com';
    const employee = new Employee('David', 4, email);
    expect(employee.email).toBe(email);

});


test('checks if getRole() returns employee', () => {

    const role = 'Employee';
    const employee = new Employee('David', 4, 'david@gmail.com')
    expect(employee.getRole()).toBe(role);

});
