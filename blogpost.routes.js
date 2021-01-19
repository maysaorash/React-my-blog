module.exports = app => {
  const blogposts = require("../controllers/blogpost.controller.js");

  var router = require("express").Router();

  // Retrieve all blog posts
  router.get("/", blogposts.findAll);

  // Create a new todo item
  router.post("/", blogposts.create);

  app.use('/api/blogposts', router);
};