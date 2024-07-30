const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.getByPlaceholder('Username')
    this.pass = page.getByPlaceholder('Password')
    this.loginButton = page.getByRole('button', { name: 'Login' })
 
  }

  async sumitLoginForm(user,pass) {
   // await this.page.goto('https://playwright.dev');
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginButton.click();
  }
/*
  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }*/
};