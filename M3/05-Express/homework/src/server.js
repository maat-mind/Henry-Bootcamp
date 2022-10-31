// EXPRESS
const express = require('express')
const server = express()

const STATUS_USER_ERROR = 422
const route = '/posts'

server.use(express.json())

// POSTS
const posts = []
let id = 0

// HTTP
server.post(route, (req, res) => {
  const { author, title, contents } = req.body

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: 'No se recibieron los parámetros necesarios para crear el Post',
    })
  }

  const post = {
    author,
    title,
    contents,
    id: ++id,
  }

  posts.push(post)
  res.json(post)
})

// server.post(`${route}/author/:author`, (req, res) => {})

// server.get(route, (req, res) => {})

// server.get(`${route}/:author`, (req, res) => {})

// server.get(`${route}/:author/:title`, (req, res) => {})

// server.put(route, (req, res) => {})

// server.delete(route, (req, res) => {})

// server.delete('/author', (req, res) => {})

module.exports = { posts, server }
