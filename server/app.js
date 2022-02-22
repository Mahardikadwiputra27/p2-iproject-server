const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const axios = require('axios')
const router = require('./routes')

app.use(cors())
app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})