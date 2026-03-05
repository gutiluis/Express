import express from "express"

const app = express()

app.get("/foo", (req, res) => {
  res.json({ message: "hello" })
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
