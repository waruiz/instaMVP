const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const url = require("url");
const router = require("./router");
const controller = require("./controller");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(logger("tiny"));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(router);

app.get('/*', (req, res)=> {
  res.sendFile( path.resolve(__dirname, '../client/dist', 'index.html') );
})

app.listen(8080, () => console.log("Server listening on port 8080."));

module.exports = app;
