#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93,
    AED: 3.67,
    SAR: 3.75,
    NZD: 1.67,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter fROM currency",
        type: "list",
        choices: ['USD', 'EUR', 'AED', 'SAR', 'NZD', 'PKR']
    },
    {
        name: "to",
        message: "Enter TO currency",
        type: "list",
        choices: ['USD', 'EUR', 'AED', 'SAR', 'NZD', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
