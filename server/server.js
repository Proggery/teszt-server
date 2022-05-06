const express = require('express')
const app = express()
const port = process.env.port || 5555;
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(bodyParser())
app.use(cors())

app.post("/users", (req, res) => {
  res.send(req.body.user)
})

app.listen(port, () => {
  console.log(`A szerver fut: http://localhost:${port}`);
})