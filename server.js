var express = require("express");
var path = require("path"); // path is not required for the functioning of this file. It is only required by the homework specifiations.

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})