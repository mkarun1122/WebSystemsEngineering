// 1. Parsing Logs for Specific Patterns

/*  LOG 




*/

let logEntry = "[2025-02-26 14:35:22] [INFO] User logged in successfully Authenticating login request for username: hazels. Request came from IP Address: 174.45.123.197";
let regex = /\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[(\w+)\] (.+)/;
let match = logEntry.match(regex);

if (match) {
  console.log(`Timestamp: ${match[1]}`);
  console.log(`Log Level: ${match[2]}`);
  console.log(`Message: ${match[3]}`);
}
