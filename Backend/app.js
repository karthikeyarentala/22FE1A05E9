const exp = require("express");
const bp = require("body-parser");
const valURL = require("valid-url");
const shortID = require("shortid");

const app = exp();

//ensuring the middleware
app.use(exp.urlencoded({extended: true}));
app.use(exp.json());

const urlDict = {};

function shortenerURL(baseURL){
    const encodedURL = encodeURI(baseURL)
    if(!valURL.isUri(baseURL)){
        console.error("Invalid URL");
        process.exit(1)
    }
    const shortURL = shortID.generate();        //generates the shortened URL

    urlDict[shortURL] = baseURL;

    return shortURL;
}

//Giving the input URL in the command prompt
const inpURL = process.argv[2];

if(!inpURL){
    console.error("please give me the proper url as an input");
    process.exit(1);
}
const res = shortenerURL(inpURL);
console.log(`Resultent Shortened URL:${res}`);