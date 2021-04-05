// local
const secret = "Super Secret";

// share
const john = "John";
const peter = "peter";

console.log(module); // module is an object, inside exports can share the encapsulated code

// in order to share the code, we will need to use module.exports
module.exports = { john, peter };
