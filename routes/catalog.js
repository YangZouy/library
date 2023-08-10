const express = require("express");
const router = express.Router();

// 导入控制器模块 路由设置中的回调处理函数均导入自上文的控制器模块
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// 藏书路由 ///

// GET 获取藏书编目主页
router.get("/", book_controller.index);

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get("/book/create", book_controller.book_create_get);

// POST 请求添加新的藏书
router.post("/book/create", book_controller.book_create_post);

// GET 请求删除藏书
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST 请求删除藏书
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET 请求更新藏书
router.get("/book/:id/update", book_controller.book_update_get);

// POST 请求更新藏书
router.post("/book/:id/update", book_controller.book_update_post);

// GET 请求藏书
router.get("/book/:id", book_controller.book_detail);

// GET 请求完整藏书列表
router.get("/books", book_controller.book_list);

/// 藏书副本路由 ///

// GET 请求添加新的藏书副本。注意此项必须位于显示藏书副本的路由（使用了 id）之前。
router.get("/book_instance/create", book_instance_controller.bookinstance_create_get);

// POST 请求添加新的藏书副本
router.post("/book_instance/create", book_instance_controller.bookinstance_create_post);

// GET 请求删除藏书副本
router.get("/book_instance/:id/delete", book_instance_controller.bookinstance_delete_get);

// POST 请求删除藏书副本
router.post("/book_instance/:id/delete", book_instance_controller.bookinstance_delete_post);

// GET 请求更新藏书副本
router.get("/book_instance/:id/update", book_instance_controller.bookinstance_update_get);

// POST 请求更新藏书副本
router.post("/book_instance/:id/update", book_instance_controller.bookinstance_update_post);

// GET 请求藏书副本
router.get("/book_instance/:id", book_instance_controller.bookinstance_detail);

// GET 请求完整藏书副本列表
router.get("/book_instances", book_instance_controller.bookinstance_list);

/// 藏书种类路由 ///

// GET 请求添加新的藏书种类。注意此项必须位于显示藏书种类的路由（使用了 id）之前。
router.get("/genre/create", genre_controller.genre_create_get);

// POST 请求添加新的藏书种类
router.post("/genre/create", genre_controller.genre_create_post);

// GET 请求删除藏书种类
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST 请求删除藏书种类
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET 请求更新藏书种类
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST 请求更新藏书种类
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET 请求藏书种类
router.get("/genre/:id", genre_controller.genre_detail);

// GET 请求完整藏书种类列表
router.get("/genres", genre_controller.genre_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating Author.
router.post("/author/create", author_controller.author_create_post);

// GET request to delete Author.
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST request to delete Author
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET request to update Author.
router.get("/author/:id/update", author_controller.author_update_get);

// POST request to update Author.
router.post("/author/:id/update", author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

module.exports = router;
