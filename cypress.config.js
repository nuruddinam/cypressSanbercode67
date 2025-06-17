const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"cypress/support/e2e.js",
    defaultCommandTimeout: 30000, // dalam milisecond (30 detik)
    baseUrl : "https://www.saucedemo.com/v1"
  },
});


