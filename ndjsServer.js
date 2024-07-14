/*Create a Node.js file that opens the requested file and returns
the content to the client. If not, throw 404 error.
links :-
http://localhost:8080/summer.html
http://localhost:8080/winter.html
*/

var http = require("http"); //For creating the HTTP server
var url = require("url"); //For parsing the URL
var fs = require("fs"); //For handling the File Management system

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
