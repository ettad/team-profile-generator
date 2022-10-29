const Employee = require('./Employee');

// intern class
class Intern extends Employee {
    // Intern Constructor
    constructor(name, id, email, school) {

        super(name, id, email);
        this.school = school;

    }

    getSchool() {

        return this.school;

    }

    getRole() {

        return 'Intern';
        
    }

}

module.exports = Intern;