
const LOG_KEY = "logs:v1";

export function logEvent(level, message, details = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...details,
  };

  let logs = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
  logs.push(entry);
  localStorage.setItem(LOG_KEY, JSON.stringify(logs));
}

export function getLogs() {
  return JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
}
