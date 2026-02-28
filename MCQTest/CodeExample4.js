const element = {
  isPresent: true,
  isDisplayed: true,
  isEnabled: true
};

// Determine element state
let state = "";
if (element.isPresent === false) {
  state = "NOT FOUND";
} else if (element.isDisplayed === false) {
  state = "HIDDEN";
} else if (element.isEnabled === false) {
  state = "DISABLED";
} else if (element.isPresent === true && element.isDisplayed === true && element.isEnabled === true) {
  state = "READY";
} else {
  state = "UNKNOWN";
}

// Determine severity using ternary operator
const severity = (element.isPresent === false) ? "CRITICAL" :
                 ((element.isDisplayed === false || element.isEnabled === false) ? "WARNING" : "OK");

// Print QA-friendly action
let action = "";
switch(state) {
  case "READY":
    action = "Interact with element as normal.";
    break;
  case "DISABLED":
    action = "Check why element is disabled before interacting.";
    break;
  case "HIDDEN":
    action = "Check element visibility or wait for it to appear.";
    break;
  case "NOT FOUND":
    action = "Investigate missing element in DOM.";
    break;
  default:
    action = "Check element state manually.";
}

console.log("===== ELEMENT CHECK REPORT =====");
console.log(`State    : ${state}`);
console.log(`Severity : ${severity}`);
console.log(`Action   : ${action}`);
console.log("================================");