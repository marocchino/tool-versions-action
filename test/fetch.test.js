import { fetch } from "../src/fetch.js";

test("load .tool-versions file to object", async () => {
  expect(fetch("./test/.tool-versions")).toStrictEqual({
    elixir: "1.9.4",
    hugo: '{"version":"0.85.0","is_extended":true}',
    nodejs: "16.0.0",
  });
});
