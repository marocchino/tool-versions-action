const fetch = require("./fetch");

test("load .tool-versions file to object", async () => {
  expect(fetch(".tool-versions")).toStrictEqual({ nodejs: "13.0.0" });
});
