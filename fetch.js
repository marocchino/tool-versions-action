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
          case "hugo":
            const is_extended = value.startsWith("extended_");
            acc[key] = JSON.stringify({
              version: is_extended ? value.replace("extended_", "") : value,
              is_extended,
            });
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
