import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    integrationFolder: "cypress/integration",
    testFiles: "**/*.*"
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
