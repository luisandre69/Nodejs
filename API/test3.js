const request = require('request');
setInterval(function () {
    request('http://test3.infra.getlenses.co.uk', {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body);
    });
}, 30000);