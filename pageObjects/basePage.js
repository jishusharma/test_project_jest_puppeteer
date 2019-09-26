exports.BasePage = BasePage;

const puppeteer = require('puppeteer');
const url = "https://edition.cnn.com";
const timeout = 30000;


function BasePage () {

// puppeteer options

    this.opts = {
        headless: false,
        slowMo: 100,
        timeout: 10000,
        defaultViewport: {width: 1920, height: 1080}
    };
    
    this.open = async function () {
        this.browser = await puppeteer.launch(this.opts);
        this.page = await this.browser.newPage();

        await this.page.goto(url, {timeout: timeout, waitUntil: 'domcontentloaded'});
    }


    this.close =  async function() {
        await this.browser.close();
    }
}
