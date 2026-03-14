const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

function printStepSummary(steps) {
  let total = steps.length;
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  let failedSteps = [];

  steps.forEach(step => {
    totalDuration += step.durationMs;

    switch (step.status) {
      case "passed":
        passed++;
        break;
      case "failed":
        failed++;
        failedSteps.push(step.name);
        break;
      case "skipped":
        skipped++;
        break;
    }
  });

  console.log("=== Playwright Steps Summary ===");
  console.log(`Total steps: ${total}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total duration (ms): ${totalDuration}`);
  console.log(`Failed steps: ${failedSteps.join(", ")}`);
}

// Run the summary
printStepSummary(results);