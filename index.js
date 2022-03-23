const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require('./src/generateHTML');

let team = [];
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the team manager?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team mangers employee ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the team mangers email?',
            name: 'email',
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
            .then((answers) => {
                init(answers.employeeType);
            });

    } if (employee.employeeType === 'Intern') {
        internPrompt()
            .then((answers) => {
                init(answers.employeeType);
            });

    } if (employee.employeeType === 'Finished') {
        fs.writeFile('./dist/index.html', generateHTML(team),function(){
            console.log(team)
    })
    return
}


}

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the engineer?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the engineer\s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the engineer\s email?',
            name: 'email',
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
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the intern\s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the intern\s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school does the intern attend?',
            name: 'internSchool',
        },
    ])
}

const managerQuestions = function (){
    inquirer.prompt(managerPrompt).then(function(answers){
        var newManager = new Manager(answers.name, answers.id, answers.email, answers.managerOfficeNumber)
        team.push(newManager)
    })
}

const engineerQuestions = function (){
    inquirer.prompt(engineerPrompt).then(function(answers){
        var newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.engineerUsername)
        team.push(newEngineer)
    })
}
const internQuestions = function (){
    inquirer.prompt(internPrompt).then(function(answers){
        var newIntern = new Intern(answers.name, answers.id, answers.email, answers.internSchool)
        team.push(newIntern)
    })
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