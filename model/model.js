const Karyawan = require("./Karyawan");
const fs = require("fs");

class Model {
  static showAll() {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
    // console.log(data)

    const dataKaryawan = data.map((karyawan) => {
      const instanceKaryawan = new Karyawan(
        karyawan.id,
        karyawan.name,
        karyawan.position,
        karyawan.salary
      );
      // console.log(instanceKaryawan)
      return instanceKaryawan;
    });
    // console.log = dataKaryawan
    return dataKaryawan;
  }

  static write(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2), "utf-8");
  }

  static addData(objKaryawan) {
    const employees = Model.showAll();
    // console.log(employees)

    let id = 1;

    if (employees.length > 0) {
      id = employees[employees.length - 1].id + 1;
      // console.log(id)
    }

    objKaryawan["id"] = id;
    const newEmployee = new Karyawan(
      objKaryawan.id,
      objKaryawan.name,
      objKaryawan.position,
      objKaryawan.salary
    );
    employees.push(newEmployee);
    // console.log(newEmployee)
    Model.write(employees);
    return newEmployee;
  }

  static removeData(id) {
    const employees = Model.showAll();
    let idEmployee = +id;
    // console.log(idEmployee, 'ini dari id parameter')

    let newDataEmployee = [];
    let deleteData;
    for (let i = 0; i < employees.length; i++) {
      // console.log(employees[i].id)
      if (employees[i].id === idEmployee) {
        deleteData = employees[i];
      } else {
        newDataEmployee.push(employees[i]);
      }
    }
    // console.log(newDataEmployee)
    Model.write(newDataEmployee);

    return deleteData;
  }

  static updateData(objEmployee) {
    // console.log(objEmployee, "ini object employee")
    // console.log(objEmployee, "objemployee dari id");

    let idEmployee = parseInt(objEmployee.id);
    let employees = Model.showAll();

    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];

      if (employee.id === idEmployee) {
        employee.name = objEmployee.name;
        employee.position = objEmployee.position;
        employee.salary = objEmployee.salary;
        break;
      }
    }
    // console.log(updatedData, "ini updatedData")
    Model.write(employees);
    return objEmployee;
  }
}
// Model.showAll()

module.exports = Model;
