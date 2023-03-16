const express = require('express')
const app = express()
const port = 3005
const cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(cors());
const Movie = require("./movieModel.js");
require("./connect.js")
app.get('/moviesData', (req, res) => {
    Movie.find({}).then((movies) => {
        res.send(movies)
    }).catch((err) => {
        res.send(err)
    })
})
app.post('/moviesData', async (req, res) => {
    const doc = await Movie.create({ title: req.body.input });
    res.send({ success: true })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})