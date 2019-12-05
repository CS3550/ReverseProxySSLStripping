var http = require('http'),
    httpProxy = require('http-proxy');
const fs=require("fs");
 
//
// From: https://www.npmjs.com/package/http-proxy
//
var proxy = httpProxy.createProxyServer({ssl: {
    key: fs.readFileSync('private', 'utf8'),
    cert: fs.readFileSync('certificate', 'utf8')
  }});

 
var server = http.createServer(function(req, res) {
  console.log("Proxying");
  proxy.web(req, res, {
    target: 'http://127.0.0.1:8080'
  });
});
 
console.log("listening on port 443")
server.listen(443);