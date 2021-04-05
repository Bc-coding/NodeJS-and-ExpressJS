const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Hello! we are create a file: ${first} ${second}`
);

writeFileSync("./content/result-sync.txt", `appending some text here`, {
  flag: "a",
});

console.log("done with this task");
console.log("starting the next one");
