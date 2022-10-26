const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/list', require('./router/listRouter'));


app.get("/", (req, res) => {
  res.send({
    msg: "hello",
  });
});

app.listen(3010, () => {
  console.log("服务器启动1:http://localhost:3010");
});
