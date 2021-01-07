const express = require('express')
const app = express()

// req = require, res = response
app.get('', function(req, res) {
  res.send('Hello World')
})

app.get('/about', function(req, res) {
  res.send('About')
})

app.get('/user', function(req, res) {
  res.send('Get User')
})

app.post('/user', function(req, res) {
  res.send('Post User')
})

app.put('/user', function(req, res) {
  res.send('Put User')
})

app.delete('/user', function(req, res) {
  res.send('Delete User')
})


// Binds and listens for connections
app.listen(3000, function() {
  console.log('Server is okay')
})
