const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/")
      res.end(
        "node is a server side language which help to establish the relation between front-end and backend"
      );
    else if (req.url === "/json") {
      const jsonResponse = {
        message:
          "node is a server side language which help to establish the relation between front-end and backend",
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(jsonResponse));
    }
  })
  .listen(5000, () => console.log("server is running"));
