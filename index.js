const core = require("@actions/core");
const fetch = require("./fetch");

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput("path");
    core.debug(`Load file at ${path}`);

    const results = fetch(path);

    for (let [key, value] of Object.entries(results)) {
      core.debug(`set output: ${key}: ${value}`);
      core.setOutput(key, value);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
