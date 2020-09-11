const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const json = require("./data.json");
app.use(cors());
const router = express.Router();
app.use(router);

app.listen(port, "localhost", (req, res) => {
  console.log(`RUNNING on port ${port}`);
});
router.get("/getData", function (req, res) {
  res.status(200).json(json);
});
