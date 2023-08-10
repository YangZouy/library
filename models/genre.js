// 图书种类模型
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Genre = new Schema({
  // 图书种类
  name: { type: String, require: true},

});

Genre.virtual("url").get(function () {
  return "catalog/genre/" + this._id;
});

// 导出 Genre 模型
module.exports = mongoose.model("Genre", Genre);