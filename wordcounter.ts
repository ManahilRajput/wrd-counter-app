#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const Ans:{
    answer:string
}=await inquirer.prompt([{
    type:"input",
    name:"answer",
    message:chalk.magenta("write any thing you wanna count : "),
}]);

const write=Ans.answer.trim().split(" ");
console.log(write);
console.log(chalk.blueBright(`YOUR TOTAL WORD ARE : ${write.length}`));