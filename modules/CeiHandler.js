var CeiCrawler = require("cei-crawler");

class CeiHandler{
    
    constructor(username, password) {
        let ceiCrawler = new CeiCrawler(username, password, {/* options */});
        ceiCrawler.login();   
    }
    


    async GetInfo(){  
        let wallets = await ceiCrawler.getWallet();
        return wallets;
    }
}

module.exports = CeiHandler; 
