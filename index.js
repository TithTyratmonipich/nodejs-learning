var welcome = require('./welcome')

// console.log(welcome.greeting())

var dt = require('./myfirstmodule')

var http = require("http")

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html'})
    response.write("hi boys, I am at DEK CHA")
    response.write("\nGreeting here" + welcome.greeting())
    response.write("\nThe date and time are currently: " + dt.myDateTime())
    response.end();
}).listen(8090);