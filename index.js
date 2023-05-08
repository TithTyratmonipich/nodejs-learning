var welcome = require('./welcome')

// console.log(welcome.greeting())

var dt = require('./myfirstmodule')

var http = require("http")

var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html'})
    response.write("hi boys, I am at DEK CHA")
    response.write("\nGreeting here" + welcome.greeting())
    response.write("\nThe date and time are currently: " + dt.myDateTime())
    response.write("\nrequest.url:" + request.url)
    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.write("\ntxt:" + txt)
    response.end();
}).listen(8080);