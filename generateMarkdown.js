// function to render the licesnse badge. takes user input and assigns an image of the badge.
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'APACHE 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'None':
      return '';
  }
}

// function that renders the license link. Uses user input to assign a link.
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'None':
      return '';
  }
}

// function that renders the license section in the readme.
function renderLicenseSection(license) {
  // if the user selects a license, this adds the license description to the readme.
  if (license !== 'None') {
    return `
## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`
  } else {
    return `
## License
    
None
`;
  }
}

// function to generate the content of the readme using user input
function generateMarkdown(data) {
  // uses responses of inquirer prompts to fill readme
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install dependencies, use the command \`${data.installation}\`.
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, use the command \`${data.tests}\`.

  ## Questions
  Further questions?

  Email: ${data.email}

  [GitHub](https://github.com/${data.username})
`;
}
// makes generateMarkdown available to other files
module.exports = generateMarkdown;
