require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000 ||  process.env.PORT
const cors = require('cors')
const router = require('./routes')



app.use(cors())
app.use('/', router)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
