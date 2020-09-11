const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;
const json = require("./data.json");
app.use(cors());
app.use(express.static(__dirname));
const router = express.Router();
app.use(router);

app.listen(port, "localhost", (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
router.get("/getData", function (req, res) {
  res.status(200).json(json);
});
