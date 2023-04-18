// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's title?", "Write a description of your project.", "What kind of license should your project have?", "What kind of command should be run to install dependencies?", "What command should be run to run tests?", "What should the user know about using the repo?", "What does the user need to know about contributing to the repo?"];

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "Write a description of your project.",
            name: 'description',
        },
        {
            type: 'list',
            message: "What kind of license should your project have?",
            name: 'license',
            default: 'MIT'
        },
        {
            type: 'input',
            message: "What kind of command should be run to install dependencies?",
            name: 'dependencesCommand',
            default: 'npm i'
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'testsCommand',
            default: 'npm test',
        },
        {
            type: 'input',
            message: "What should the user know about using the repo?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "What does the user need to know about contributing to the repo?",
            name: 'contribute',
        },

    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
