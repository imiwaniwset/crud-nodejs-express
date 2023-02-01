const Student = require("./student")
const fs = require("fs")
class Model {
  static showData() {
    const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
    // console.log(data);

    const dataStudents = data.map((student) => {
      const instanceStudent = new Student(student.id, student.first_name, student.last_name, student.gender, student.adress)
      return instanceStudent

    })
    // console.log(dataStudents);
    return dataStudents

  }
}

// Model.showData()
module.exports = Model