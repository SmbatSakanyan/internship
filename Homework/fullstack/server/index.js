const uuid = require('uuid')
const express = require('express');
const app = express();

app.use(express.json({ extended: true }));

const posts = []

app.get('/api/posts', function (req, res) {
  const post = posts.find(item => item.author == req.query.value)
  if (post) {
    res.status(201).json(post)
  } else {
    res.status(201).json({message:`there is no author ${req.query.value}`})
  }
})

app.post('/api/posts', function (req, res) {
  const post = req.body
  post.id = uuid.v4();
  posts.push(post);
})

app.listen(5000, console.log("app has been started"))