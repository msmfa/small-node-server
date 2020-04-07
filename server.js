const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (request, response) {
    const q = url.parse(request.url, true);
    const filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        response.writeHead(404, { "Content-type": "text/html" });
        return response.end("404 Not Found");
      }
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(data);
      return response.end();
    });
  })
  .listen(8080);
