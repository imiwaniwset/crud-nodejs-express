const argv = process.argv
// console.log(argv);
const Controller = require("./controller/controller")
const command = argv[2]

if (command === "show") {
  Controller.showData()
}