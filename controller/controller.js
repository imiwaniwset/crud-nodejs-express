const Model = require('../model/Model')
const View = require("../view/View")

class Controller {
  static showAll() {
    const karyawan = Model.showAll()
    // console.log(karyawan)
    View.showAll(karyawan)
  }
  static addData(karyawan) {
    console.log(karyawan)
    const [first_name, last_name, position, salary, join_year] = karyawan

    const objKaryawan = {
      first_name,
      last_name,
      position,
      salary,
      join_year

    }
    const newEmployee = Model.addData(objKaryawan)
    View.createNewKaryawan(newEmployee)
  }
}

// Controller.addData()
module.exports = Controller