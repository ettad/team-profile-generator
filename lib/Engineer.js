const Employee = require('./Employee');

//class for engineer
class Engineer extends Employee {
    // constructor for engineer
    constructor(name, id, email, gitHub) {

        super(name, id, email);
        this.gitHub = gitHub;

    }

    getGitHub() {

        return this.gitHub;

    }

    getRole() {

        return 'Engineer';

    }

}

module.exports = Engineer;