export const config = {
    runner: 'local',
    specs: ['./tests/features/**/*.feature'],
	services: ['chromedriver'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: [
        ['allure', { outputDir: 'allure-results' }]
    ],
    cucumberOpts: {
        require: ['./tests/step-definitions/*.ts'],
        timeout: 60000,
    },
};
