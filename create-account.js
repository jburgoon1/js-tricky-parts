function createAccount(pin, amount) {
    let storedPin = pin 
    console.log(amount)
    let balance = amount===undefined?0:amount
const methods=  {
checkBalance: function(pin){
    if(pin !== storedPin) return "Invalid PIN."

    return `$${balance}`
},
deposit: function(pin, amount){
    if(pin !== storedPin) return "Invalid PIN."
    balance+=amount
    return `Succesfully deposited $${amount}. Current balance: $${balance}.`
},
withdraw: function(pin, amount){
    if(pin !== storedPin) return "Invalid PIN."
    if(amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
    balance-=amount
    return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
},
changePin: function(pin, newPin){
    if(pin !== storedPin) return "Invalid PIN."
    if(pin === newPin) return "Cannot use the same pin"
    storedPin = newPin
    return "PIN successfully changed!"
}

}
return methods
}

module.exports = { createAccount };
