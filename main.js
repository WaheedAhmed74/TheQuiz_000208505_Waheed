/*
    myName : string =  "Waheed Ahmed"
    myRollNo: number = 000208505
    myEmailId: string =  "waheedahmedsoomro@gmail.com"
    myDaySlot: string = "Saturday (07:00 - 10:00)"
*/
import inquirer from "inquirer"; // Import the inquirer
import chalk from "chalk"; // import the chalk for beautification
let qa = await inquirer.prompt([
    {
        name: "yourname", // prompt the name
        message: "What is your Name",
        type: "input",
    },
    {
        name: "quiz", // Get Ready
        message: "Are You Ready to Start QUIZ ??",
        type: "list",
        choices: ["Yes", "No"]
    }
]);
let score = 0; // Initialize the Score variable
if (qa.quiz == "Yes") { // start the Quiz of Typescripts Questions True / False
    let startquiz = await inquirer.prompt([
        {
            name: "q1",
            message: "TypeScript will always correctly infer the type of an array",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q2",
            message: "Interfaces are similar to type aliases, but only for object types?",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q3",
            message: "'keyof' can be used with index signatures to extract the index type.",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q4",
            message: "Generics can not be assigned default values.",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q5",
            message: "Public modifiers allow access to the class members from anywhere.",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q6",
            message: "TypeScript can always correctly infer a variables type.",
            type: "list",
            choices: ["True", "False"],
        },
        {
            name: "q7",
            message: "A Tuple and an Array are the same thing when discussing types",
            type: "list",
            choices: ["True", "False"],
        },
    ]);
    const myRollNo = Math.floor((Math.random()) * 100000);
    console.log(chalk.yellow.bold(`Candidate Name :   ${qa.yourname}`)); // Print the Candidate Name
    console.log(chalk.yellow.bold(`Candidate Roll No :   ${myRollNo}`)); // Print the Candidate Name
    if (startquiz.q1 == "False") {
        console.log(chalk.yellow.bold("\n1. Correct"));
        score += 1;
    }
    else {
        console.log("\n1. Incorrect");
    }
    if (startquiz.q2 == "True") {
        console.log(chalk.yellow.bold("2. Correct"));
        score += 1;
    }
    else {
        console.log("2. Incorrect");
    }
    if (startquiz.q3 == "True") {
        console.log(chalk.yellow.bold("3. Correct"));
        score += 1;
    }
    else {
        console.log("3. Incorrect");
    }
    if (startquiz.q4 == "False") {
        console.log(chalk.yellow.bold("4. Correct"));
        score += 1;
    }
    else {
        console.log("4. Incorrect");
    }
    if (startquiz.q5 == "True") {
        console.log(chalk.yellow.bold("5. Correct"));
        score += 1;
    }
    else {
        console.log("5. Incorrect");
    }
    if (startquiz.q6 == "False") {
        console.log(chalk.yellow.bold("6. Correct"));
        score += 1;
    }
    else {
        console.log("6. Incorrect");
    }
    if (startquiz.q7 == "False") {
        console.log(chalk.yellow.bold("7. Correct"));
        score += 1;
    }
    else {
        console.log("7. Incorrect");
    }
    if (score >= 5) { // If the Score is Satisfactore You WIN
        console.log(chalk.underline("\nGood Efforts"));
        console.log(chalk.green.bold(`You Get the points ${score} out of 7`));
    }
    else { // Better Luck Next Time
        console.log(chalk.underline("\nBetter Luck, Try again after Preparation"));
        console.log(chalk.red(`You Get the points ${score} out of 7`));
    }
}
else {
    console.log(chalk.red.bold.underline(`Have a Nice Day, Try after Your Preparation`));
}
