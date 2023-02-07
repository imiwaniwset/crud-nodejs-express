const command = process.argv[2]
// console.log(command);
const params = process.argv.slice(3)

const Controller = require('./controller/Controller')

if (command === "show") {
  Controller.showAll()
} else if (command === "add") {
  Controller.addData(params)
} else if (command === "delete") {
  Controller.removeData(params)
} else if (command === "update") {
  Controller.filter(params)
}