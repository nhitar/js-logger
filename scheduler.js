import { config } from "./config.js";
import { loggerWrapper } from "./logger.js";

const log = loggerWrapper();

function scheduleTask(name, interval, task) {
  log(`Task "${name}" with interval ${interval} msec started.`);
  setInterval(task, interval);
}

log("scheduler.js file started.");
scheduleTask("run logger", config.intervalMsec, () => {
  log("running.");
});
