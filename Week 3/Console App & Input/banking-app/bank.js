const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let balance = 100

function menu () {
    console.log ("\n=== Banking System ===")
    console.log("1)check Balance")
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");

    rl.question("Choose option (1-4)", function (choice){
        handleChoice(choice)
    })
}
function handleChoice(choice) {
  switch (choice) {
    case "1":
      console.log(`Your balance is: $${balance}`);
      menu();
      break;
    case "2":
      rl.question("Enter amount to deposit: $", function (amount) {
        let deposit = parseFloat(amount);
        if (deposit > 0) {
          balance += deposit;
          console.log(`New balance: $${balance}`);
        } else {
          console.log("Invalid amount.");
        }
        menu();
      });
      break;
    case "3":
      rl.question("Enter amount to withdraw: $", function (amount) {
        let withdraw = parseFloat(amount);
        if (withdraw > 0 && withdraw <= balance) {
          balance -= withdraw;
          console.log(`New balance: $${balance}`);
        } else {
          console.log("Invalid or insufficient amount.");
        }
        menu();
      });
      break;
    case "4":
      console.log("Thank you for using our banking system.");
      rl.close();
      break;
    default:
      console.log("Invalid choice. Please enter 1-4.");
      menu();
  }
}
menu ();


 