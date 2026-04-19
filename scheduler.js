import { config } from "./config.js";
import { createLogger } from "./logger.js";

const log = createLogger();

function scheduleTask(name, interval, task) {
  log(`Task "${name}" with interval ${interval} msec started.`);
  setInterval(task, interval);
}

function initScript() {
  log("scheduler.js file started.");
  scheduleTask("run logger", config.intervalMsec, () => {
    log("running.");
  });
}

initScript();
