// GIVEN a command - line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high - quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is the usage information of your project?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What is the license type of your project?',
      name: 'license',
      choices: [
        "MIT License", "Apache License 2.0", "GPLV3"
      ]
    },
    {
      type: 'input',
      message: 'Who are the contributors for your project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What tests can be run on your project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please enter the link to your Github profile.',
      name: 'githubAddress',
    },
    {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'email',
    },
  ])
  //TODO Add sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

  //! Source for method of destructuring the array used below: https://www.freecodecamp.org/news/how-to-destructure-an-array-in-javascript/

  //Badge Links:
  //MIT  https://img.shields.io/bower/l/mi
  //Apache 2  https://img.shields.io/hexpm/l/apa
  //GPLv3

  .then((response) => {
    console.log(response)
    const { title, description, installation, usage, license, contributing, tests, githubAddress, email } = response;
    
    let badge;
    if (license === "MIT License") {
      badge = '![MIT](https://img.shields.io/bower/l/mi)'
    } else if (license === "Apache License 2.0") {
      badge = `![Apache 2.0](https://img.shields.io/hexpm/l/apa)`
    } else {
      badge = `![GPLV3](https://img.shields.io/pypi/l/c)`
    };
    
    const data = 
`# ${title}
  ${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

...

## Installation

${installation}

...

## Usage

${usage}

...

## License

${license}

...

## Contributing

${contributing}

...

## Tests

${tests}

...

## Questions

Here is a link to my Github: ${githubAddress}.

If you have any questions regarding this project, please contact me at ${email}.

`;

    fs.appendFile('README.md', data, (err) =>
      err ? console.error(err) : console.log('Congratulations on creating your README!')
    );
  });
