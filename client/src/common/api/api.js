import request from "./request.js";

const url = "/"; // 1.外出申请提交 post

export function test() {
  return request({
    url: url,
    method: "GET",
  });
}
