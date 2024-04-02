// // NPM module

// // const color = require("cli-color");
//  console.log("🚀 ~ color:", color.green("Hello"));

// const { register, login } = require("./auth");
// register("Sagar");
// login("Sagarmj1502");

// const path = require("path");

// console.log("older name", path.dirname(__filename));
// console.log("base name", path.basename(__filename));

// //extension
// console.log("extname___", path.extname(__filename));

// // parse
// console.log("parse:", path.parse(__filename));
// //join
// console.log("Join:", path.join(__dirname, "order", "app.js"));

//---> fs module (File System)

// The Node.js fs module lets you interact with files on your computer.
// It can read and write files, make directories,
// check file contents,and change file permissions.
// It supports both quick (asynchronous) and
// step-by-step (synchronous) tasks, making it flexible for different coding needs.

const fs = require("fs");
const path = require("path");
// make a directory
fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    console.log("Something went wrong", err);
    return;
  }
  console.log("Folder created...");
}); // first parameter (Path) 2=> file_name

// create file

fs.writeFile(
  path.join(__dirname, "test", "firstFile.js"),
  "Hello node",
  (err) => {
    if (err) {
      throw err;
    }
    fs.appendFile(
      path.join(__dirname, "test", "firstFile.txt"),
      "more data..",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("Data Added..!");
      }
    );
    console.log("File created....");
  }
);
