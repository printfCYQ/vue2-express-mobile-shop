const express = require("express");
const Mock = require("mockjs");
const Random = Mock.Random;
const router = express.Router();

const mockData = Mock.mock({
  "list|100": [
    {
      createTime: Random.datetime(),
      "boolean|2": true,
    },
  ],
});

router.get("/", function (req, res) {
  console.log(req.body);
  res.send({
    code: 200,
    msg: "获取成功",
    data: {
      data: mockData.list,
    },
  });
});

router.get("/:id", function (req, res) {
  res.send(`订单详情`);
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
module.exports = router;
