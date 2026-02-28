const responseTimes = [120, 450, 510, 300, 620, 200, 480]; // in milliseconds
const SLA_THRESHOLD = 500; // SLA threshold in ms

let i = 0;
let minTime = responseTimes[0];
let maxTime = responseTimes[0];
let totalTime = 0;
let breachedCount = 0;

while (i < responseTimes.length) {
  const time = responseTimes[i];

  // Track min and max
  if (time < minTime) {
    minTime = time;
  }
  if (time > maxTime) {
    maxTime = time;
  }

  // Accumulate total for average
  totalTime += time;

  // Check SLA breach
  if (time > SLA_THRESHOLD) {
    breachedCount++;
  }

  i++;
}

// Calculate average
const averageTime = (totalTime / responseTimes.length).toFixed(2);

// Print performance report
console.log("===== API PERFORMANCE REPORT =====");
console.log(`Total Responses : ${responseTimes.length}`);
console.log(`Min Response    : ${minTime} ms`);
console.log(`Max Response    : ${maxTime} ms`);
console.log(`Average Response: ${averageTime} ms`);
console.log(`SLA Breaches    : ${breachedCount} response(s) > ${SLA_THRESHOLD} ms`);
console.log("==================================");