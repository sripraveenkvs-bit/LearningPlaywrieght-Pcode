function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);
  
  try {
    // Execute the callback
    actionFn();

    // If no error, step passed
    return {
      stepName,
      passed: true,
      message: "Step completed successfully"
    };
  } catch (error) {
    // If callback throws, catch and mark as failed
    return {
      stepName,
      passed: false,
      message: error.message || String(error)
    };
  }
}

// Example input
const result = runStep("open dashboard", () => "Page loaded");

console.log(result)