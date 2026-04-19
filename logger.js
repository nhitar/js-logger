import { config } from "./config.js";

export function createLogger() {
  return function(...args) {
    console.log(`[${config.appName}]`, ...args);
  };
}
