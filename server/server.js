var express = require('express');
var app = express();
var EventEmitter = require('events').EventEmitter;
var bookSearched = new EventEmitter()

function findBook(bookName) {
	var book = decodeURI(bookName);
	book = encodeURI(book);
    var https = require('https');
    var bookPath = "/books/v1/volumes?q=" + book + "&key=AIzaSyBzSw27PVE1EmFa1Knn4V7KW4DnWgGaF3Q"
    var options = {
        host: 'www.googleapis.com',
        path: bookPath
    };

    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function(chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function() {
            bookInfo = JSON.parse(str)
            bookSearched.emit("finished", "DONE")
            bookPrice = JSON.stringify(bookInfo.items[0].saleInfo.retailPrice.amount)

        });
    }
    https.request(options, callback).end();
}
app.get('/', function(req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    findBook(req.query.bname)
    bookSearched.on("finished", function() {
        var sending=setInterval(function() {
            res.end(bookPrice)
            clearInterval(sending)
        }, 100)
    })
});

app.listen(8080, function() {
    console.log('Server Listening');
});