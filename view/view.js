class View {
  static showAll(data) {
    console.table(data);
  }
  static createNewKaryawan(newEmployee) {
    console.log(`Sukses create new Empoyee`);
    console.log(`===================`);
    console.log(`Welcome ${newEmployee.name} as our new employee`);
  }
  static successDeletedEmployee(deletedEmployee) {
    console.log(`Successfully delete employee`);
    console.log(`====================`);
    console.log(
      `employee who has name ${deletedEmployee.name} has been resign`
    );
    // console.log(`Welcome ${deletedEmployee.fullName} as our new employee`)
  }

  static successUpdatedEmployee(employee) {
    console.log(`Employee with ID ${employee.id} updated successfully.`);
  }
}

module.exports = View;
