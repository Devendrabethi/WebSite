const fs = require('fs');
const path = require('path');

async function globalSetup() {
    // Read TEST_ENV directly from cross-env
  const env = process.env.TEST_ENV  || 'hotfixqa'; // hotfixqa, uat, etc.

  const allureResultsDir = path.join(__dirname, 'allure-results');

  // Ensure directory exists
  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir);
  }

  // Write environment.properties file
  fs.writeFileSync(
    path.join(allureResultsDir, 'environment.properties'),
    `Environment=${env}\n`
  );

  console.log(`✔ Allure environment set to: ${env}`);
}

module.exports = globalSetup;
