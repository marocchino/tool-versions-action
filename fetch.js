const fs = require("fs");
const fetch = function(path) {
  return fs
    .readFileSync(path)
    .toString()
    .split("\n")
    .reduce((acc, current) => {
      const [key, value] = current.trim().split(/\s+/);
      if (value) {
        acc[key] = value;
      }
      return acc;
    }, {});
};

module.exports = fetch;
