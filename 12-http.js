// HTTP

// brief intro
// cover in detail later

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.write("Here is our short history");
    res.end();
  }
  res.write(`
  <h1>Opps!</h1>
  <p>We can't find the page you are looing for</p>
  <a href="/">back home</a>`);
});

server.listen(5000, () => {
  console.log("the port is running on local host 5000");
});
