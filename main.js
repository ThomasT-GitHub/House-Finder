const { chromium } = require("playwright");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userAgentStrings = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.2227.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.3497.92 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
];

rl.question("Please enter the address: ", async address => {
  // Launch Chromium browser instance
  const browser = await chromium.launch((headless = false));

  // Create a new browser context with a randomly selected user agent string
  const context = await browser.newContext({
    userAgent:
      userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)]
  });

  const page = await context.newPage();

  await page.goto("https://www.zillow.com/");

  await page.waitForSelector('input[type="text"][aria-label="Search"]');
  await page.fill('input[type="text"][aria-label="Search"]', address);
  await page.press('input[type="text"][aria-label="Search"]', "Enter");

  await page.waitForSelector(".search-results");
  console.log(page.url);

  await browser.close();
  rl.close();
});
