var allAccounts = [];

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

BankAccount.prototype.display = function (){
  return "Name: " + this.name + "<br>" + "Checking Balance: " + this.cBalance + "<br>" + "Saving Balance: " + this.sBalance + "<br>";
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

function accountAdd(selector, amount){
  if(selector == 0){
    this.add(0, amount);

  } else if(selector ==1){
    this.add(1, amount);
  } else {

  }
}

function logInFunction(name, password){
  var arrLength = allAccounts.length;
  for(var i = 0; i < arrLength; i ++){
    var currentAccount = allAccounts[i];
    if(currentAccount.name == allAccounts[i].name && currentAccount.password == allAccounts[i].password){
      console.log(i);
      return i;
    } else if(currentAccount.name == allAccounts[i].name && currentAccount.password != allAccounts[i].password){
      console.log(i);
      return "Sorry " + currentAccount.name + " you entered the wrong password."
    } else {
    }
  }
    return "No account with that name exists."
}

//Display Functions
function display(){
  $("#results").prepend("<p>" + this.display() + "</p>");
}




//Form Input Selection
$(document).ready(function(){
  $("form#bankAccountForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var password = $("#password").val();
    var iDeposit= parseInt($("#iDeposit").val());
    var newBankAccountObj = new BankAccount(name, password, iDeposit, 0);
    accountChecker(newBankAccountObj);
    });
  $("form#logIn").submit(function(event){
    event.preventDefault();
    var name = $("#user").val();
    var password = $("#password").val();
    var account = logInFunction(name, password);
    console.log(allAccounts[account]);
    if(IsNaN(allAccounts[account]) != true){
      $("form#bankAccountAdd").submit(function(event) {
      event.preventDefault();
      var accountSelector = $("accountSelector").val();
      var depositAmount = $("depositAmountHTML").val();
      accountAdd(accountSelector, depositAmount);
      display();
      });
    } else {
      alert(account);
    }
  });
});
