const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
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
      message: 'Please enter your Github username.',
      name: 'githubAddress',
    },
    {
      type: 'input',
      message: 'Please enter your email address.',
      name: 'email',
    },
  ])

  //! Source for method of destructuring the array used below: https://www.freecodecamp.org/news/how-to-destructure-an-array-in-javascript/

  .then((response) => {
    console.log(response)
    const { title, description, installation, usage, license, contributing, tests, githubAddress, email } = response;
    
    let badge;
    if (license === "MIT License") {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license === "Apache License 2.0") {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else {
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
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

Here is a link to my Github: http://www.github.com/${githubAddress}

If you have any questions regarding this project, please contact me at ${email}

`;

    fs.appendFile('sampleREADME.md', data, (err) =>
      err ? console.error(err) : console.log('Congratulations on creating your README!')
    );
  });
