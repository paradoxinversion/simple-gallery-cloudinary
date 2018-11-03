const express = require("express");
const bodyParser = require("body-parser");
const index = require("./api/index");
const mongooseClient = require("./database/client");

const app = express();
const port = 3000;
mongooseClient();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api", index);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.resolve(__dirname, "..", "..", "dist")));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "..", "..", "dist/index.html"));
  });
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
