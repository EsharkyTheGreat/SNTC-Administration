const express = require("express")
const app = express()
const port = 3000 || process.env.PORT
const router = require('../routes')
const mongoose = require("mongoose")
require("dotenv").config()

const uri = process.env.DB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

app.use(express.json())
mongoose.connect(uri, options, () => {
    console.log(`Connected to DB`)
    app.use('/api', router)
    app.get('/', (req, res) => {
        res.send('Hello World!');
    })
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
    })
})
