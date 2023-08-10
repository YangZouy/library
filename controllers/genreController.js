/*
  定义路由之前应先使用单独的“控制器”模块创建回调的结构骨架。
*/

// 导入了用于访问和更新数据的模型
// 为每个需要处理（添加、更新和删除表单，以及相应的 POST 请求）的 URL 导出一个函数。
const Genre = require("../models/genre");

// 显示完整的图书种类列表
exports.genre_list = (req, res) => {
  res.send("未实现：图书种类列表");
};

// 为每位图书种类显示详细信息的页面
exports.genre_detail = (req, res) => {
  res.send("未实现：图书种类详细信息：" + req.params.id);
};

// 由 GET 显示创建图书种类的表单
exports.genre_create_get = (req, res) => {
  res.send("未实现：图书种类创建表单的 GET");
};

// 由 POST 处理图书种类创建操作
exports.genre_create_post = (req, res) => {
  res.send("未实现：创建图书种类的 POST");
};

// 由 GET 显示删除图书种类的表单
exports.genre_delete_get = (req, res) => {
  res.send("未实现：图书种类删除表单的 GET");
};

// 由 POST 处理图书种类删除操作
exports.genre_delete_post = (req, res) => {
  res.send("未实现：删除图书种类的 POST");
};

// 由 GET 显示更新图书种类的表单
exports.genre_update_get = (req, res) => {
  res.send("未实现：图书种类更新表单的 GET");
};

// 由 POST 处理图书种类更新操作
exports.genre_update_post = (req, res) => {
  res.send("未实现：更新图书种类的 POST");
};
