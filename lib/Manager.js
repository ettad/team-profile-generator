const Employee = require('./Employee');

// manager class
class Manager extends Employee {
    // Manager Constructor
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber() {

        return this.officeNumber;

    }

    getRole() {

        return 'Manager';
        
    }
}

module.exports = Manager;