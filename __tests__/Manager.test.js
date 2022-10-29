const Manager = require('../lib/Manager');

test('create offic number', () => {
    const officeNumber = 1;
    const manager = new Manager('David', 4, 'david@gmail.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('check  if getOfficeNumber() return office number', () => {
    const officeNumber = 1;
    const manager = new Manager('David', 4, 'david@gmail.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('check if getRole() return Manager', () => {
    const role = 'Manager';
    const manager = new Manager('David', 4, 'david@gmail.com', 1);
    expect(manager.getRole()).toBe(role);
});