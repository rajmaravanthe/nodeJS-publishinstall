var http = require('http');
var caseChange = require('change-case');

//variable declaration
var string = "Rajesh here";
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "content-type": "text/plain" });

    console.log("Uppercase  " + caseChange.upperCase(string));
    response.end("Camel " + caseChange.camelCase(string));

});

server.listen(3000);