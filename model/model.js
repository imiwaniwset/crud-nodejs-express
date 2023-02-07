const Karyawan = require('./Karyawan')
const fs = require('fs')


class Model {
  static showAll() {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
    // console.log(data)

    const dataKaryawan = data.map((karyawan) => {
      const instanceKaryawan = new Karyawan(karyawan.id, karyawan.first_name, karyawan.last_name, karyawan.position, karyawan.salary, karyawan.join_year)
      // console.log(instanceKaryawan)
      return instanceKaryawan
    })
    // console.log = dataKaryawan
    return dataKaryawan
  }

  static write(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf-8')
  }

  static addData(objKaryawan) {
    const employees = Model.showAll()
    // console.log(employees)

    let id = 1

    if (employees.length > 0) {

      id = employees[employees.length - 1].id + 1
      console.log(id)
    }

    objKaryawan['id'] = id
    const newEmployee = new Karyawan(objKaryawan.id, objKaryawan.first_name, objKaryawan.last_name, objKaryawan.position, objKaryawan.salary, objKaryawan.join_year)
    employees.push(newEmployee)
    // console.log(employees)
    Model.write(employees)
    return newEmployee










  }
}
// Model.showAll()

module.exports = Model