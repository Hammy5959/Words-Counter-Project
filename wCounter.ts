#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//Welcome Animation
async function welcome() {
  let title = chalkAnimation.rainbow(
    "-Develp By Sheikh Hamid-\nStart Your Words Counting"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  title.stop();
}
await welcome();

//Project Words Counting
async function wordsCounting() {
  const answers: {
    sentence: string;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "sentence",
      message: "Enter your sentence to count your words:",
    },
  ]);
  const words = answers.sentence.trim().split(" ");
  console.log(
    chalk.bold.underline.italic.red(`Your sentence words is:${words.length}`)
  );
}

//Start Again Project
async function startAgain() {
  do {
    await wordsCounting();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do You Want to Continue Counting? Press (y/n)",
    });
  } while (
    again.restart === "y" ||
    again.restart === "Y" ||
    again.restart === "yes" ||
    again.restart === "YES"
  );
}
startAgain();
