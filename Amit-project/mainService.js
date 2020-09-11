const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const hostname = "127.0.0.1";
const port = 3002;
app.use(cors());
app.use(express.static(__dirname));

app.listen(port, "localhost", (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
