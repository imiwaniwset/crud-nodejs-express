const Model = require("../model/Model");
const View = require("../view/View");

class Controller {
  static showAll() {
    const karyawan = Model.showAll();
    // console.log(karyawan)
    View.showAll(karyawan);
  }

  static addData(karyawan) {
    // console.log(karyawan)
    const [name, position, salary] = karyawan;

    const objKaryawan = {
      name,
      position,
      salary,
    };
    const newEmployee = Model.addData(objKaryawan);
    // console.log(newEmployee, "ini dari controller")
    View.createNewKaryawan(newEmployee);
  }
  static removeData(id) {
    // console.log(id)
    const deletedEmployee = Model.removeData(id);
    // console.log(deletedEmployee, "ini dari controller")
    View.successDeletedEmployee(deletedEmployee);
    // return deletedEmployee
  }

  static updateData(employee) {
    const [id, name, position, salary] = employee;

    const objEmployee = {
      id,
      name,
      position,
      salary,
    };
    console.log(objEmployee, "ini dari controller");

    const updatedEmployee = Model.updateData(objEmployee);

    View.successUpdatedEmployee(updatedEmployee);
    // console.log(updateData, "dari controller");
  }
}

// Controller.addData()
module.exports = Controller;
