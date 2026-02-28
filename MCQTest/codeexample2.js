//Code example 2

const testResults = ["pass", "fail", "pass", "skip", "pass", "fail"]; // Example array

// Initialize counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Count results
for (let i = 0; i < testResults.length; i++) {
  switch (testResults[i]) {
    case "pass":
      passCount++;
      break;
    case "fail":
      failCount++;
      break;
    case "skip":
      skipCount++;
      break;
    default:
      console.warn(`Unknown result: ${testResults[i]}`);
  }
}

// Calculate total and pass rate
const totalTests = testResults.length;
const passRate = ((passCount / totalTests) * 100).toFixed(2); // Two decimal places

// Determine verdict
let verdict = "";
if (failCount === 0) {
  verdict = "READY FOR RELEASE ✅";
} else if (failCount <= 2) {
  verdict = "REVIEW REQUIRED ⚠️";
} else {
  verdict = "BLOCK RELEASE ❌";
}

// Print test report
console.log("===== TEST REPORT =====");
console.log(`Total tests  : ${totalTests}`);
console.log(`Passed       : ${passCount}`);
console.log(`Failed       : ${failCount}`);
console.log(`Skipped      : ${skipCount}`);
console.log(`Pass rate    : ${passRate}%`);
console.log(`Verdict      : ${verdict}`);
console.log("=======================");

