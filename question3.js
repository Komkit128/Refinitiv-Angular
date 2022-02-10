const puppeteer = require('puppeteer')

let selectedNavName = ""

process.argv.forEach(function (val, index, array) {
    // console.log(`${index+1} : ${val}`);
    if(index === 2) selectedNavName = val
});

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
    await page.goto('https://codequiz.azurewebsites.net')
    await page.evaluate(() => {
        acceptCookie();
    });
    await page.waitFor(500); //Wait a bit for the website to refresh contents

    // await page.$eval('input[]', el => el.click());
    
    // const textContent = await page.$eval(selector, (element) => { return element.innerHTML })
    const textContent = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('table tr td'))
        return tds.map(td => td.innerText)
    });
    
    // console.log(`textContent : ${JSON.stringify(textContent)}`)

    let findIndexNav = textContent.findIndex(item => item === selectedNavName) + 2

    console.log(`NavName : ${selectedNavName} has values : ${textContent[findIndexNav]}`)

    return;
}
scrape()