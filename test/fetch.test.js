const fetch = require("../fetch");

test("load .tool-versions file to object", async () => {
  expect(fetch("./test/.tool-versions")).toStrictEqual({
    elixir: "1.9.4",
    nodejs: "13.0.0"
  });
});
