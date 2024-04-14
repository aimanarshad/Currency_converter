import inquirer from "inquirer"
const currency :any= {
    USD:1,
    EUR:0.91,
    GBP:0.15,
    PKR: 280,
    INR:74.57
}
let userAnswer = await inquirer.prompt(

    [
        {
            name:"amount",
            type :"number",
            message:"enter your amount to convert  "
        },
        {
            name:"typeOfCurrency",
            message:"select your type of currency",
            type:"list",
            choices:["USD","EUR","GBP","PKR","INR"]
        },
          {  name:"toConvert",
            type:"list",
            message:"choose in which cuurency you want ot convert",
            choices:["USD","EUR","GBP","PKR","INR"]
        }
    ]
)
let CurrencyType=currency[userAnswer.typeOfCurrency];
let ConvertCurrency=currency[userAnswer.toConvert];
let amounts= userAnswer.amount;
let baseamount = amounts/CurrencyType;
let Convert = baseamount*ConvertCurrency;
console.log("CurrencyType"+CurrencyType+"ConvertCurrency"+
    ConvertCurrency+ 
    amounts+"baseamount"+
    baseamount)
console.log(Convert);

