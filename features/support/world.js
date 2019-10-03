const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')
const HOME_PAGE = 'http://localhost:3000'

class RPSWorld {
  constructor() {}

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

  async clickOnImage(imgName) {
    const imgSelector = this.imgSelectorFromName(imgName.toLowerCase())
    await this.page.waitForSelector(imgSelector)
    await this.page.click(imgSelector)
  }

  imgSelectorFromName(imgName) {
    switch (imgName) {
      case 'rock':
        return '#rock';
        break;
      case 'paper':
        return '#paper';
        break;
      case 'scissors':
        return '#scissors';
        break;
      default:
        throw `${imgName} move is not defined`;
        break;
    }
  }
}

setWorldConstructor(RPSWorld)