const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

function getBrowserExecutionPlan(allBrowsers, blockedBrowsers) {
  // Convert blocked browsers to a Set for fast lookup
  const blockedSet = new Set(blockedBrowsers.map(b => b.toLowerCase()));

  // Separate runnable and blocked browsers
  const runnable = allBrowsers.filter(b => !blockedSet.has(b.toLowerCase()));
  const blocked = allBrowsers.filter(b => blockedSet.has(b.toLowerCase()));

  // Create execution plan string
  const executionPlan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return { runnable, blocked, executionPlan };
}

// Run the function
const plan = getBrowserExecutionPlan(allBrowsers, blockedBrowsers);

console.log(plan.runnable);       // ["chromium", "webkit"]
console.log(plan.blocked);        // ["firefox"]
console.log(plan.executionPlan);  // "Run on: chromium, webkit | Skip: firefox"