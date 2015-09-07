#!/usr/bin/env node

var request = require('request');
var cheerio = require('cheerio');
var address = process.argv[2] ? process.argv[2] : "blic.rs";

var searchTerm = process.argv[3] ? process.argv[3] : 'Vučić';
var url = 'http://' + address;

//special case
if(address === "rts.rs") {
    url = "http://www.rts.rs/page/home/sr.html";
}

request(url, function(err, resp, body) {
    $ = cheerio.load(body);

    var shitNumber = $( "a:contains(" + searchTerm + ")" ).filter(function() {
        return $(this).children().length === 0;
    }).length;

    console.log("Govana za danas -->", shitNumber);

});