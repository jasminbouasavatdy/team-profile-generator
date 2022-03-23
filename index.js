const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the team manager?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the team mangers employee ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'What is the team mangers email?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the team mangers office number?',
            name: 'managerOfficeNumber',
        },

    ])


};
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'rawlist',
            message: 'Which employee would you like to add?',
            name: 'employeeType',
            choices: ['Engineer', 'Intern', 'Finished']
        },
    ])
};
const ifChosen = (employee) => {
    if (employee.employeeType === 'Engineer') {
        engineerPrompt()
            .then(addEmployee)
            .then((answers) => {
                init(answers.employeeType);
                // console.log('henlo am here')
            });

    } if (employee.employeeType === 'Intern') {
        internPrompt()
            .then(addEmployee)
            .then((answers) => {
                init(answers.employeeType);
            });

    } if (employee.employeeType === 'Finished') {
        process.exit();
    }


}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is the engineer\s id?',
            name: 'engineerId',
        },
        {
            type: 'input',
            message: 'What is the engineer\s email?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is the engineers GitHub username?',
            name: 'engineerUsername',
        },
    ])
}
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is the intern\s id?',
            name: 'internId',
        },
        {
            type: 'input',
            message: 'What is the intern\s email?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'internSchool',
        },
    ])
}


const init = (type) => {
    if (type === 'manager') {
        managerPrompt()
            .then(addEmployee)
            .then(ifChosen);
    } else {

        addEmployee()
            .then(ifChosen);
    }

}
init('manager')