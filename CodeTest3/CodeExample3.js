const rawMessage = " Locator not found after TIMEOUT ";

function categorizePlaywrightError(rawMessage) {
  // Step 1: Trim extra spaces
  let normalized = rawMessage.trim();

  // Step 2: Convert to lowercase
  normalized = normalized.toLowerCase();

  // Step 3: Collapse multiple spaces into a single space
  normalized = normalized.replace(/\s+/g, " ");

  // Step 4: Determine category
  let category;
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log(`Category: ${category}`);
}

// Run with your input
categorizePlaywrightError(rawMessage);
