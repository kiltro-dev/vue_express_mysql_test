const express = require('express')
const bodyParser = require('body-parser')
const tasks = require('-/routes/tasks')
const cors = require('cors')

const port = 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('api/', tasks)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})