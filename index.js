const express = require("express");

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello Node 23');
})

server.post('/echo', (req, res) => {
  const data = req.body;
  
  res.json(data)
})

const port = 8000;
server.listen(port, () => {
  console.log("\n**API on port 8000**\n")
})