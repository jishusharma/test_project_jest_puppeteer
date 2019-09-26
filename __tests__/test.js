let assert = require('assert');
var  MainPage  = require('../pageObjects/mainPage.js').MainPage;
const puppeteer = require('puppeteer');
const timeout = 30000

describe('Search Scenarios simple test!', async () => {
  var main;
  var searchPageResult;
  beforeAll(async () => {
      main = new MainPage();

  },timeout);
  it('cnn.com should return no search results', async () => {
      await main.open();
      await main.showSearchInput();
      await main.typeToSearchInput("NFLFake");

      searchPageResult = await main.proceedToResultPage();
      var message = await searchPageResult.getEmptyListMessage(3000);
      expect(message.length > 0);
      var count = await searchPageResult.getArticlesCount(0);
      expect(count == 0);
      main.close();

  },timeout);

  it('cnn.com should return results', async () => {
    await main.open();
    await main.showSearchInput();
    await main.typeToSearchInput("NFL");

    searchPageResult = await main.proceedToResultPage();
    var message = await searchPageResult.getEmptyListMessage(3000);
    assert(message.length == 0);
    var count = await searchPageResult.getArticlesCount(0);
    expect(count > 0);
    main.close();
  },timeout);

});