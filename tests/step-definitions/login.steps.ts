import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('I am on the login page', async () => {
    await browser.url('/');
});

When('I login with valid credentials', async () => {
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();
});

When('I login with invalid credentials', async () => {
    await $('#user-name').setValue('invalid_user');
    await $('#password').setValue('invalid_password');
    await $('#login-button').click();
});

Then('I should see the products page', async () => {
    expect(await browser.getUrl()).to.include('/inventory.html');
});

Then('I should see an error message', async () => {
    expect(await $('.error-message-container').isDisplayed()).to.be.true;
});
