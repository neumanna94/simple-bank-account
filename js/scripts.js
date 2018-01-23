//Bank Account Object Definition
function BankAccount(nameInput, checkingBalanceIn, savingBalanceIn){
  this.name = nameInput;
  this.cBalance = checkingBalanceIn;
  this.sBalance = savingBalanceIn;
  this.sInterest = 4;
}
BankAccount.prototype.add = function(location, amount){
  if(location == "Saving" || location == 0){
    this.sBalance += amount;
  } else if(location == "Checking" || location == 1) {
    this.cBalance += amount;
  }
}
BankAccount.prototype.simpleInterest = function(amountOfYears){
  this.sBalance = this.sBalance*(1 + (this.sInterest/100)*amountOfYears);
}



//Display Function





//Form Input Selection
