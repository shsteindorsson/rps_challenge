const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can play RPS', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(async () => {
    await browser.close();
  });

  it('should see the rules of the game', async () => {
    expect(content).to.eql('Rules:');
  });
});
