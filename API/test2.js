const request = require('request');

request('http://test2.infra.getlenses.co.uk', {
    json: true
}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body);
});