const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

async function globalSetup() {
  // Read TEST_ENV directly from cross-env
  const env = process.env.TEST_ENV  || 'hotfixqa'; // hotfixqa, uat, etc.
  const allureResultsDir = path.join(__dirname, 'allure-results');
  const allureReportDir = path.join(__dirname, 'allure-report');

  // Ensure directory exists
  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir);
  }
  // Copy history folder from previous report (if exists)
  const historySrc = path.join(allureReportDir, 'history');
  const historyDest = path.join(allureResultsDir, 'history');

  if (fs.existsSync(historySrc)) {
    // Use fs-extra to copy recursively
    fse.copySync(historySrc, historyDest, { overwrite: true });
    console.log('✔ Allure history copied from previous report');
  }

  // Write environment.properties file
  fs.writeFileSync(
    path.join(allureResultsDir, 'environment.properties'),
    `Environment=${env}\n`
  );
  
  // Prepare executor info JSON
  const executor = {
    name: 'Devendra Prasad',
    buildName: 'v1.15.4'
  };
  // Write executor.json file (one file, JSON string)
  fs.writeFileSync(
    path.join(allureResultsDir, 'executor.json'),
    JSON.stringify(executor, null, 2)
  );

  console.log(`✔ Allure environment set to: ${env}`);
  console.log(`✔ Executor info written to executor.json`);
}

module.exports = globalSetup;
