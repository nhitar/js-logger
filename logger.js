import { config } from "./config.js";

export function loggerWrapper() {
  return function(...args) {
    console.log(`[${config.appName}]`, ...args);
  };
}
