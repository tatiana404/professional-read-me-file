const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([
              {
              type: 'input',
              name: 'projectName',
              message: 'Enter the project name:',
            },{
              type: 'input',
              name: 'description',
              message: 'Enter a brief description of your project:',
            },{
                type: "input",
                message: "Please give your GitHub profile link.",
                name: "GitHub"
            },{
                type: "list",
                name: "license",
                message: "Please select which license you would like to use.",
                choices : [
                    "APACHE 2.O",
                    "BSD 3",
                    "GVL-GPL 3.0",
                    "MIT",
                    "None"
                ],
            },{
              type: 'input',
              name: 'author',
              message: 'Enter the author name:',
            },{
              type: 'input',
              name: 'installation',
              message: 'Enter installation instructions:',
            },{
              type: 'input',
              name: 'usage',
              message: 'Enter usage instructions:',
            },{
              type: 'input',
              name: 'contributing',
              message: 'Enter contributing guidelines:',
            },{
              type: 'input',
              name: 'tests',
              message: 'Enter tests instructions:',
            },{
              type: 'input',
              name: 'questions',
              message: 'Enter your mail to reach you for more questions:',
            },

])
 .then((answers) => {
    // Generate the README content based on user input
    const readmeContent = generateMarkdown(answers)

  
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });

