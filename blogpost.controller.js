const db = require("../models");
const BlogPost = db.blogposts;

// Retrieve all BlogPost from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  BlogPost.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving todo items."
      });
    });
};

// Create and Save a new Blogpost
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a TodoItem
  const blogpost = new BlogPost({
    title: req.body.title,
    body: req.body.body,
    published: req.body.published ? req.body.published : false
  });

  // Save TodoItem in the database
  blogpost
    .save(blogpost)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TodoItem."
      });
    });
};
