// import { mkdir } from "node:fs";

const fs = require("fs");
const folderName = process.argv[2] || "Project";
// fs.mkdir("project", (err) => {
//   console.log("di dalam callback");
//   if (err) throw err;
// });
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
  console.log("berhasil");
} catch (error) {
  console.log(error);
}
