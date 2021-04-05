// ComomJS, every file is module (default)
// Modules - Encapsulated Code (only share minium)

// to get the shared code from names.js, we need to use require

//const names = require("./4-names"); // inside require, we need to pass in the path
const { john, peter } = require("./4-names");
//console.log(names);
const sayHi = require("./5-utils");
const data = require("./6-alternative");
//console.log(data);

require("./7-items");

sayHi("susan");
// sayHi(names.john);
// sayHo(names.peter);
sayHi(john);
sayHi(peter);
