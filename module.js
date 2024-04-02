// NPM module

// const color = require("cli-color");
// console.log("🚀 ~ color:", color.green("Hello"));

const { register, login } = require("./auth");
register("Sagar");
login("Sagarmj1502");

const path = require("path");

console.log("older name", path.dirname(__filename));
console.log("base name", path.basename(__filename));

//extension
console.log("extname___", path.extname(__filename));

// parse
console.log("parse:", path.parse(__filename));
//join
console.log("Join:", path.join(__dirname, "order", "app.js"));
