// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license === "GNU AGPLv3") {
  return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]";
  }  else if (license === "Mozilla") {
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else if (license === "MIT") {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Apache") {
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else {
  return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
  }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === "GNU AGPLv3") {
  return "[![License: AGPL v3]](https://www.gnu.org/licenses/agpl-3.0)";
  }  else if (license === "Mozilla") {
  return "[![License: MPL 2.0]](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
  return "[![License: MIT]](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
  return "[![License]](https://opensource.org/licenses/Apache-2.0)";
  } else {
  return "[![License]](https://www.boost.org/LICENSE_1_0.txt)";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}


  ## Description:
  ${data.description}
   
  ---
  
  ## Contents
  
  
  2. [Installation](#installation)
  
  3. [Usage](#usage)
  
  4. [Contributing](#contributing)
  
  5. [Tests](#tests)
  
  
  ## Installation:
  
  ${data.installation}
  
  ---
  
 ## Usage:
 
 ${data.usage}
  

  ---
  
  
  
  ## License
  
  License used for this project - ${data.license}
  ${renderLicenseLink(data.license)}
  
  ---
  
  
  
  ## Contributing:
  
  Please follow these instructions to contribute to the project:
  ${data.contributing}
  

  
  ---
  
  ## Tests:
  
  ${data.tests}
  
  ---
  
  
  
  ## Questions
  
  * GitHub Username: ${data.userName}
  * Link to Github user profile: ${data.profileLink}
  * Email Address: ${data.userEmail}
  
  ---
  
  
  ;
  
  }
  
`;
}

module.exports = generateMarkdown