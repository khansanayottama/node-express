const express = require('express')
const app = express()

// req = require, res = response
app.get('', function(req, res) {
  res.send('Home')
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

app.put('/user/:uname', function(req, res) {
  res.send(req.params)
})

app.delete('/user/:id', function(req, res) {
  res.send(req.params.id)
})


// Binds and listens for connections
app.listen(3000, function() {
  console.log('Server is run')
})
