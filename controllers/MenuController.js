const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [{
      type: "list",
      name: "mainMenuChoice",
      message: "Please choose from an option below: ",
      choices: [
        "Add new contact",
        "Get date",
        "Exit"
      ]
    }];
    this.contacts = [];
  }

  main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch (response.mainMenuChoice) {
          case "Add new contact":
            this.addContact();
            break;
          case "Get date":
            this.getDate();
            break;
          case "Exit":
            this.exit();
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate() {
    this.clear();
    var date = new Date();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var ampm = " pm";
     if(hours > 12){
       hours = hours - 12;
       ampm = "pm";
     }
     var month = date.getMonth();
     var day = date.getDate();
     var year = date.getFullYear();
   console.log(month + "/" + day + "/" + year + " - " + hours+ ':' + minutes.substr(-2) + ampm + "\n");
    this.main();
  }

  exit() {
    this.clear();
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
}
