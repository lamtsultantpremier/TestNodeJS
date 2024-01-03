const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcom to our home page");
  } else if (req.url === "/about") {
    res.end("we talk about ourselves");
  } else {
    res.end(`
    <h1>Oops something was wrong</h1>
    <p>Go to the home page with the link at bellow</p>
    <a href="/">home</a>
  `);
  }
});
server.listen(5000);
