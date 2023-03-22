const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require("express")
const app = express();

app.get("/:word/echo", (req, res) => {
  const {word} = req.params;
  res.json({
    echo: word
  });
});
app.listen(port, () => {
  //console.log(`Server running at http://localhost:${port}`);
})

module.exports = app;
