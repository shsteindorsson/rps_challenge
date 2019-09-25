const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can play RPS', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });
  }
);
