const express = require("express");
const sanitizer = require("sanitizer");

const app = express();
const port = process.env.PORT || 4000;

var entries = [];
app.get("/", (request, response) => {
  const html = `
    <html>
        <body>
            <form action="/store" method="get">
                <label>Enter your text</label>
                <input type="text" name="value"></input>
                <input type="submit" name="submit"></input>
            </form>
            <ul>
                ${entries.map((value) => "<li>" + value + "</li>")}
            </ul>
        </body>
    </html>
    `;

  console.log("entries", entries);
  console.log("getting");
  response.setHeader("ContentType", "text/html");
  response.setHeader("Content-Security-Policy", "default-src 'self'");
  response.send(html);
});

app.get("/store", (request, response) => {
  let body = request.query;
  const value = body.value;
  console.log("storing");
  //   entries.push(sanitizer.escape(value));
  entries.push(value);

  response.redirect("/");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
