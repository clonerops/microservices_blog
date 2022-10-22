const express = require('express')
const cors =  require('cors')
const axios = require('axios')
const { randomBytes } =  require('crypto')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const commentById = []

app.get('/post/:id/comments', (req, res) => {
    res.send(commentById[req.params.id] || [])
})

app.post('/post/:id/comments', async(req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body 
    const comments = commentById[req.params.id] || []

    comments.push({id: commentId, content})
    commentById[req.params.id] = comments

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id
        }
    })

    res.status(201).send(comments)

})

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type)
    res.send({})
})

app.listen(4001, () => {
    console.log("Server is up: 4001")
})