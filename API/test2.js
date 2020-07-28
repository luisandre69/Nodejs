const request = require('request');
var jsonpretty = require('jsonpretty');

setInterval(function () {
    request('http://test2.infra.getlenses.co.uk', {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(jsonpretty(body));
    });
}, 30000);