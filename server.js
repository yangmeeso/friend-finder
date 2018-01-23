// Dependencies of npm package.
var express = require("express");
var bodyParser = require("body-parser");

// Creating an 'express' server through node.
var app = express();

// Initiating an application port.
var PORT = process.env.PORT || 3001;

// bodyParser is to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// when it's 'false', the value can be a string or array. when it's 'true', it could be any form. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// A map of how to respond when users request data from URLs. A link connects files from other locations.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listner starts the application port (3000).
app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
  });

// NOTES: I have error message saying "body-parser deprecated undefined extended: provide extended option server.js:12:20" when I run the server.js in node.