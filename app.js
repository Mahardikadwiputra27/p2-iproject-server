require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000 ||  process.env.PORT
const cors = require('cors')
const router = require('./routes')
const errorHandler = require('./middlewares/errorhandler')



app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
