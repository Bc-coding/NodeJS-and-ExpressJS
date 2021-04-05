// Path module allows us to interacts with different module through file path
const path = require("path");
// path separator property -- this returns path platform separator
console.log(path.sep); // returns /

// path.join() method
const filePath = path.join("/content/", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// result() returns a absolute path
const absolute = path.resolve(__dirname, "content"); // __dirname points the folder the file sits in
