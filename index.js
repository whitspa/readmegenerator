// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function init() {
inquirer
.prompt([
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "input",
    message: "Please enter a short description of your project:",
    name: "description",
    },
    {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
    },
    {
        type: "input",
        message: "Please enter the usage information for your project",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter the guidelines for contributing to your project",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are the instructions for code tests in your project?",
        name: "tests",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
        "GNU AGPLv3",
        "Mozilla",
        "MIT",
        "Apache",
        "Boost",
        ],
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "profileLink",
        message: "What is the link to your Github profile page?",
     },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email address?",
    },
    ])
   .then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
   }) 

 // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
}

// Function call to initialize app
init();
