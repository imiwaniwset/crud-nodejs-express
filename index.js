const command = process.argv[2]
const params = process.argv.slice(3)

const Controller = require('./controller/Controller')
// console.log(params, "ini parameter");

if (command === "show") {
  Controller.showAll()
} else if (command === "add") {
  Controller.addData(params)
} else if (command === "delete") {
  Controller.removeData(params)
} else if (command === "update") {
  Controller.updateData(params)
}