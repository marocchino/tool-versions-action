const fs = require("fs");
const fetch = function(path) {
  return fs
    .readFileSync(path)
    .toString()
    .split("\n")
    .reduce((acc, current) => {
      const [key, value] = current.trim().split(/\s+/);
      if (value) {
        switch (key) {
          case "elixir":
            acc[key] = value.replace(/-otp.+/, "");
            break;

          default:
            acc[key] = value;
            break;
        }
      }
      return acc;
    }, {});
};

module.exports = fetch;
