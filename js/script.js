
var BankAccount = {
  balance: 0,
  name:"",

  withdraw: function(amount) {
      this.balance = this.balance - amount;
      this.name=this.name;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
    this.name=this.name;
}
};
$(document).ready(function() {
var newAccount = Object.create(BankAccount);
$("form#create").submit(function(event) {
event.preventDefault();
var inputtedName = $("input#name").val();


var inputtedBalance = parseInt($("input#initial").val());
newAccount.name = inputtedName;

newAccount.deposit(inputtedBalance);
$(".names").text(newAccount.name);

$(".balance").text(newAccount.balance);

});
$("form#manage").submit(function(event) {
event.preventDefault();
var newBalance = parseInt($("input#deposit").val());
newAccount.deposit(newBalance);
$(".balance").text(newAccount.balance);

});
$("form#withdraw").submit(function(event) {
event.preventDefault();
var newBalance = parseInt($("input#withdraw").val());
newAccount.withdraw(newBalance);
$(".balance").text(newAccount.balance);
});
});
