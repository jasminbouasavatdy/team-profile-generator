const inquirer = require("inquirer");
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        message: 'What is the team mangers name?',
        name: 'manager-name',
    },
    {
        type: 'input',
        message: 'What is the team mangers employee ID?',
        name: 'manager-id',
    },
    {
        type: 'input',
        message: 'What is the team mangers email?',
        name: 'manager-email',
    },
    {
        type: 'input',
        message: 'What is the team mangers office number?',
        name: 'manager-office-number',
    },
    {
        type: 'checkbox',
        message: 'Which team member would you like to add?',
        name: 'add-team-members',
        choices: [
            { name: 'Engineer', value: 'Engineer' },
            { name: 'Intern', value: 'Intern' },
            { name: 'Finish Building Team', value: 'Finish Building Team' },
        ]
    },
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineer-name',
    },
    {
        type: 'input',
        message: 'What is the engineers employee ID?',
        name: 'engineer-id',
    },
    {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'engineer-email',
    },
    {
        type: 'input',
        message: 'What is the engineers GitHub username?',
        name: 'engineer-github',
    },
    {
        type: 'checkbox',
        message: 'Which team member would you like to add?',
        name: 'add-team-members',
        choices: [
            { name: 'Engineer', value: 'Engineer' },
            { name: 'Intern', value: 'Intern' },
            { name: 'Finish Building Team', value: 'Finish Building Team' },
        ]
    },
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'intern-name',
    },
    {
        type: 'input',
        message: 'What is the interns employee ID?',
        name: 'intern-id',
    },
    {
        type: 'input',
        message: 'What is the interns email?',
        name: 'intern-email',
    },
    {
        type: 'input',
        message: 'What school does the intern go to?',
        name: 'intern-school',
    },
    {
        type: 'checkbox',
        message: 'Which team member would you like to add?',
        name: 'add-team-members',
        choices: [
            { name: 'Engineer', value: 'Engineer' },
            { name: 'Intern', value: 'Intern' },
            { name: 'Finish Building Team', value: 'Finish Building Team' },
        ]
    },
])