const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')
const HOME_PAGE = 'http://localhost:3000'
const RULES_PAGE = 'http://localhost:3000/src/rules.html'

class RPSWorld {
  constructor() {}

  // Open the home page using puppeteer
  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  async closeHomePage() {
    await this.browser.close()
  }

  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]

    expect(actualContent).to.be.eq(expectedContent)
  }

  async clickOnLink(linkName) {
    const linkSelector = this.linkSelectorFromName(linkName.toLowerCase())
    await this.page.waitForSelector(linkSelector)
    await this.page.click(linkSelector)
  }

  linkSelectorFromName(linkName) {
    switch (linkName) {
      case 'rules of rock-paper-scissors':
        return '#rules_link';
        break;
      default:
        throw `${linkName} Link is not defined`;
        break;
    }
  }

}

setWorldConstructor(RPSWorld)