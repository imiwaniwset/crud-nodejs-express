const Model = require("../model/model")
const View = require("../view/view")

class Controller {
  static showData() {
    const dataStudent = Model.showData()
    View.showData(dataStudent)
  }
}

module.exports = Controller