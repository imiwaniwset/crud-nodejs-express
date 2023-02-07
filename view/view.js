class View {
  static showAll(data) {
    console.log(data)
  }
  static createNewKaryawan(newEmployee) {
    console.log(`Sukses create new Empoyee`)
    console.log(`===================`)
    console.log(`Welcome ${newEmployee.fullName} as our new employee`)

  }
}

module.exports = View