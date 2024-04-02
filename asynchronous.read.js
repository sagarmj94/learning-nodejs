const { ConvertCsv, convertCsv } = require("./csv.parse");
const { readFile } = require("fs");

readFile("./data/pulitzer-circulation-data.csv", "utf8", (err, data) => {
  if (err) {
    console.log("🚀There was problem with the file:", err);
    return;
  }
  const vals = convertCsv(data);
  console.table(vals);
});
