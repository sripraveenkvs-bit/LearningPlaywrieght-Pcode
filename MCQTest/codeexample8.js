const environment = "staging"; // dev, staging, qa, prod/production

// Fixed values for each environment
const ENV_CONFIGS = {
  dev:    { baseURL: "https://dev.api.example.com", apiKeyPrefix: "DEV-", timeout: 3000, description: "Development environment" },
  staging:{ baseURL: "https://staging.api.example.com", apiKeyPrefix: "STG-", timeout: 5000, description: "Staging environment" },
  qa:     { baseURL: "https://qa.api.example.com", apiKeyPrefix: "QA-", timeout: 4000, description: "QA environment" },
  prod:   { baseURL: "https://api.example.com", apiKeyPrefix: "PROD-", timeout: 8000, description: "Production environment" }
};

// Assembled config variable
let config;

switch(environment) {
  case "dev":
    config = ENV_CONFIGS.dev;
    break;
  case "staging":
    config = ENV_CONFIGS.staging;
    break;
  case "qa":
    config = ENV_CONFIGS.qa;
    break;
  case "production":
  case "prod":
    config = ENV_CONFIGS.prod;
    break;
  default:
    console.error("Unknown environment! Please check the environment variable.");
    config = null;
}

// Print environment config
if (config !== null) {
  console.log("===== ENVIRONMENT CONFIGURATION =====");
  console.log(`Environment : ${environment}`);
  console.log(`Base URL    : ${config.baseURL}`);
  console.log(`API Key     : ${config.apiKeyPrefix}XXXX-XXXX`);
  console.log(`Timeout     : ${config.timeout} ms`);
  console.log(`Description : ${config.description}`);
  console.log("=====================================");
}