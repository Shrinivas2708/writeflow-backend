import chalk from "chalk";
import fs from "fs"
import path from "path";

const file = fs.readFileSync(`${path.join(__dirname,'../.env.example')}` , 'utf-8')

export const validateEnv = () => {
  const requiredEnvs = file.split("=").map((v) => v.trim()).filter((v)=> v != '');
  console.log(chalk.greenBright("Checking for .env variables"))
 requiredEnvs.map((v)=>{
  
  if(!process.env[v]){
    console.log(`${chalk.bgRed(" ERROR ")} ${chalk.red(`❌ Missing required environment variables: ${v} \n `)}${chalk.gray(`Add varibale ${v} with it's value in .env and retry`)}`)
    process.exit(1)
     
  }
  console.log(`${chalk.bgGreenBright(" SUCCESS ")} ${chalk.greenBright(`Env variable for ${v} exist!`)}`)
  
})

};
