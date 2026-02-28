let maxRetries = 5;
let attempt = 0;
let success = false;

do {
  attempt++;
  console.log(`Attempt ${attempt}...`);

  // Simulate API call success/failure (40% chance of success)
  const randomValue = Math.random(); // 0.0 to 1.0
  if (randomValue > 0.6) {
    success = true;
    console.log("API call succeeded ✅");
    break; // Exit loop on success
  } else {
    console.log("API call failed ❌");
  }

} while (attempt < maxRetries);

if (!success) {
  console.log(`API call failed after ${maxRetries} attempts ❌`);
} else {
  console.log(`API call succeeded on attempt ${attempt} 🎉`);
}