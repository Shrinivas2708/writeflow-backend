import chalk from "chalk";
import fs from "fs";
import path from "path";

// Optional helper
const log = console.log;

export const validateEnv = () => {
  if (process.env.NODE_ENV === "production") {
    log(chalk.yellow("Skipping .env validation in production ✅"));
    return;
  }

  const examplePath = path.join(__dirname, "../.env.example");

  if (!fs.existsSync(examplePath)) {
    log(chalk.red("⚠️ .env.example not found. Skipping validation."));
    return;
  }

  const file = fs.readFileSync(examplePath, "utf-8");

  const requiredEnvs = file
    .split("\n")
    .map((line) => line.trim().split("=")[0])
    .filter((key) => key);

  log(chalk.cyan("🔍 Checking required .env variables:"));

  for (const envKey of requiredEnvs) {
    if (!process.env[envKey]) {
      log(
        `${chalk.bgRed(" ERROR ")} ${chalk.red(
          `❌ Missing required env: ${envKey}`
        )} ${chalk.gray(`→ Add ${envKey} to your .env`)}`
      );
      process.exit(1);
    }

    log(
      `${chalk.bgGreenBright(" OK ")} ${chalk.greenBright(
        `Found ${envKey}`
      )}`
    );
  }

  log(chalk.green("\n✅ All required env variables are present.\n"));
};
