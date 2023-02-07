class Karyawan {
  constructor(id, first_name, last_name, position, salary, join_year) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.position = position;
    this.salary = salary;
    this.join_year = join_year;
  }

  get fullName() {
    return `${this.first_name} ${this.last_name}`
  }
}

module.exports = Karyawan