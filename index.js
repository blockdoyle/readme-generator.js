// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gmd = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
/* REQUIRED INPUT:
 * Project Title
 * Description
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions
 */
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a short description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide the installation command(s) for your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide the usage command(s) for your project.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please provide test instructions for your project.",
    name: "test",
  },
  {
    type: "input",
    message: "Please provide contribution guidelines for your project.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please provide your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Please provide your email address.",
    name: "email",
  },
  {
    type: "list",
    message: "Please select a license for your project.",
    name: "license",
    choices: ["MIT", "Apache", "GPL v3", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
