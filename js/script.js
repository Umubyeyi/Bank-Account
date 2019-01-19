
var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
      this.balance = this.balance - amount;
  },