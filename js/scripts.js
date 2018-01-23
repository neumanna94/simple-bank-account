var allAccounts = [
  new BankAccount("Alex", "Alex", 200, 400),
  new BankAccount("Tim", "Tim", 400, 800),
  new BankAccount("Sarah", "Sarah", 800, 1600)
];
//Bank Account Object Definition
function BankAccount(nameInput, password, checkingBalanceIn, savingBalanceIn){
  this.name = nameInput;
  this.password = password;
  this.cBalance = checkingBalanceIn;
  this.sBalance = savingBalanceIn;
  this.sInterest = 4;
}
BankAccount.prototype.add = function(location, amount){
  if(location == "Checking" || location == 0){
    this.sBalance += amount;
  } else if(location == "Saving" || location == 1) {
    this.cBalance += amount;
  }
}
BankAccount.prototype.simpleInterest = function(amountOfYears){
  this.sBalance = this.sBalance*(1 + (this.sInterest/100)*amountOfYears);
}
BankAccount.prototype.display = function() {
  return "<strong>Name: </strong>" + this.name + "<br>" + "<strong>Checking Balance: </strong>" + this.cBalance + "<br>" + "<strong>Saving Balance: </strong>" + this.sBalance + "<br>" + "<strong> Saving Interest Rate: </strong>" + this.sInterest + "<br>";
}

function transfer(from, to, amount) {
  if(from==0 && to==1){
    if((this.cBalance-amount)< 0){
      alert("Not enough Balance in Checking Account.");
    } else {
      this.add(from, amount*-1);
      this.add(to, amount);
    }
  } else if(from==1&&to==0){
    if((this.sBalance-amount < 0)){
      alert("Not enough Balance in Savings Account.")
    } else {
      this.add(from, amount*-1);
      this.add(to, amount);
    }
  }
}

//BankAccount Object Accessor Functions
function accountChecker(bankAccount){
  if(allAccounts[0] == null){
    allAccounts.push(bankAccount);
    return "Account Successfully Created";
  }
  var arrLength = allAccounts.length;
  for(var i = 0; i < arrLength; i ++){
    var currAccount = allAccounts[i];
    if(bankAccount.name == currAccount.name){
      return "Sorry Account Name Taken.";
    }
  }
  allAccounts.push(bankAccount);
  return "Account Successfully Created.";
}
function accountAdd(currentAccountIndex,selector, amount){
  if(selector == 0){
    allAccounts[currentAccountIndex].add(0, amount);
  } else if(selector ==1){
    allAccounts[currentAccountIndex].add(1, amount);
  }
}
function logInFunction(name, password){
  var arrLength = allAccounts.length;
  for(var i = 0; i < arrLength; i ++){
    // debugger;
    var currentAccount = allAccounts[i];
    if((currentAccount.name === name) && (currentAccount.password == password)){
      return i;
    } else if((currentAccount.name == name) && currentAccount.password != password){
      return "Sorry " + currentAccount.name + " you entered the wrong password."
    }
  }
    return "No account with that name exists."
}

//Display Functions
function display(){
  $("#results").toggle();
  $("#bankAccountAdd").toggle();
  $("#bankAccountForm").toggle();
  $("#logIn").toggle();
  $("results").text("");
}
function writeAccountInformation(accountSelector){
  $("#results p").text("");
  $("#results p").append(allAccounts[accountSelector].display());
}
//Form Input Selection
$(document).ready(function(){
  var currentAccountIndex;
  $("form#bankAccountForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var password = $("#password").val();
    var iDeposit= parseInt($("#iDeposit").val());
    var newBankAccountObj = new BankAccount(name, password, iDeposit, 0);
    alert(accountChecker(newBankAccountObj));
    });
  $("form#logIn").submit(function(event){
    event.preventDefault();
    var name = $("#user").val();
    var password = $("#loginPassword").val();
    var account = logInFunction(name, password);
    if(!isNaN(account)){
      alert("Log in Successfull!");
      display();
      currentAccountIndex = account;
      writeAccountInformation(currentAccountIndex);
    } else {
      alert(account);
    }
  });
  $("form#bankAccountAdd").submit(function(event) {
    event.preventDefault();
    console.log(currentAccountIndex);
    var accountSelector = parseInt($("#accountSelector").val());
    var depositAmount = parseInt($("#depositAmountHTML").val());
    console.log(accountSelector);
    console.log(depositAmount);
    accountAdd(currentAccountIndex, accountSelector, depositAmount);
  });
  $("#returnButton").click(function() {
    display();
  });
});
