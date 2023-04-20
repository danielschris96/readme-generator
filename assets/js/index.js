// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input

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
            message: "What is the title of your project?",
            name: 'title',
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
            default: 'MIT',
            choices: [
                'MIT',
                'APACHE 2.0',
                'GPL 3.0',
                'BSD 3',
                'None',
            ],
        },
        {
            type: 'input',
            message: "What kind of command should be run to install dependencies?",
            name: 'installation',
            default: 'npm i',
        },
        {
            type: 'input',
            message: "What command should be run to run tests?",
            name: 'test',
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
    .then((data) => {
        const readme = generateMarkdown(data);

        fs.writeFile("READMEnew.md", readme, (err) =>
        err ? console.log(err): console.log("Successfully generated READMEnew.md"));
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
