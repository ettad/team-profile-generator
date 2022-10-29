const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// requiring needed constructors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/template.js');

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

// Create empty arrays for team and id as place holders
const members = [];
const membersId = [];

function init() {

        // allow user to add more team members 
        function addTeam() {
            inquirer.prompt([
                {
                    type: "list",
                    name: "choice",
                    message: "Select the new team member's role to add a team member\n",
                    choices: [
                        "Add Engineer",
                        "Add Intern",
                        "Done!"
                    ]
                }
            ]).then(promptChoice => {
                switch (promptChoice.choice) {
                    case "Add Engineer":
                        addEngineer();
                        break;
                    case "Add Intern":
                        addIntern();
                        break;
                    default:
                        generateHTML();
                }
            });
        }

    // Prompt user to create a manager when application starts
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "fullName",
                message: "Enter manager's full name?",
            },

            {
                type: "input",
                name: "id",
                message: "Enter manager's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "Enter manager's email?",
            },

            {
                type: "input",
                name: "officeNumber",
                message: "Enter manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.fullName, answers.id, answers.email, answers.officeNumber);
            members.push(manager);
            membersId.push(answers.id);
            addTeam();
        });
    }

    // add an Engineer when selected
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "fullName",
                message: "Enter engineer's full name?",
            },

            {
                type: "input",
                name: "id",
                message: "Enter engineer's id?",
            },

            {
                type: "input",
                name: "email",
                message: "Enter engineer's email?",
            },

            {
                type: "input",
                name: "gitHub",
                message: "Enter engineer's GitHub username?",
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.fullName, answers.id, answers.email, answers.gitHub);
            members.push(engineer);
            membersId.push(answers.id);
            addTeam();
        });
    }

    // Add an Intern when selected
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "fullName",
                message: "Enter intern's full name?",
            },
            {
                type: "input",
                name: "id",
                message: "Enter intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "Enter intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "Enter intern's school?",
            }

        ]).then(answers => {
            const intern = new Intern(answers.fullName, answers.id, answers.email, answers.school);
            members.push(intern);
            membersId.push(answers.id);
            addTeam();
        });
    }
    
    function generateHTML() {

        // create dist directory for index.html if it doesnt exist
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(outputPath, render(members), "utf-8");
        console.log("index.html is created inside dist folder");
    }

    addManager();
}

init();