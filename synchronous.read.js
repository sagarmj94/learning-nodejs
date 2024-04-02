const { convertCsv } = require("./csv.parse");
const { readFileSync } = require("fs");

const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");
console.table(convertCsv(data));

// in that case how to handle error
try {
  const data1 = readFileSync("./data/pulitzer-circulation-data.cs", "utf8");
  console.table(convertCsv(data1));
} catch (error) {
  console.log("🚀 ~ error:", error);
}
