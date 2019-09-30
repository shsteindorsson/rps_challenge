const { After, Given, Then, When } = require("cucumber")

After(async function() {
  return await this.closeHomePage()
})

Given('I visit the site', async function () {
  return await this.openHomePage()
})

Then('I should see {string}', async function (content) {
  return await this.pageHasTextContent(content)
})

When('I click {string} link', async function (string) {
  return await this.clickOnLink(string)
})

Then('I click {string} image', async function (string) {
  return await this.clickOnImage(string)
})