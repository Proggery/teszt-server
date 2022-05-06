const express = require('express')
const app = express()
const port = process.env.port || 5555;

app.get("/", (req, res) => {
  res.send("siker")
})

app.listen(port, () => {
  console.log(`A szerver fut: http://localhost:${port}`);
})