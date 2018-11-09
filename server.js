// Dependencies
var express = require("express");
var path = require("path");
// Express server
var app = express();
// Sets an initial port. 
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTE
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
