// Arrays that are created to be used
let bankDetails = [
    {
        name: 'salman',
        account: 'savings',
        amount: 400,
    },

    {
        name: 'hud',
        account: 'savings',
        amount: 500,
    }

];

 // Function 1
// Function to deposut cash from amount in bankDetails array
function depositCash(name, cashIn) {
    // Finds if name entered exist in bankDetails array and assign name entered to variable "names"
    let names = bankDetails.find((n) => n.name === name)
    // If name not found, return null  
    if(!names){
        console.log('Name entered is not found');
        return null;
    }
    // If amount entered less than 0, return null
    if(cashIn < 0) {
        console.log('Enter positive numbers only');
        return null;
    }
    // else, add amount and display name and updated amount
    else{
        // Adding amounted entered and initial amount and send it into a variable "newAmount"
        var newAmount = names.amount + cashIn;
        console.log(`Sucessfully added amount to account holder: Name: ${name} and the new balance: ${newAmount}`);
    }
}


// Function 2
// Function to withdraw cash from amount in bankDetails array
function withdrawCash(name, cashOut) {
    // Finds if name entered exist in array and assign name entered to variable "names"
    let names = bankDetails.find((n) => n.name === name)
    
    // If name not found, log error message and return null  
    if(!names){
        console.log('Name entered is invalid');
        return null
    }
    // If amount entered more than amount in bank, return null
    if(cashOut > names.amount) {
        console.log('Withdrawal amount is more than amount.');
        return null;
    } 
    // else, subtract amount and display name and updated amount
    else{
    // Subtracting initial amount and amount entered and send it into a variable "newAmount"
        var newAmount = names.amount - cashOut;
    // Display entered name and updated balance in log
    console.log(`Sucessfully deducted amount to account holder: Name: ${name} and the new balance: ${newAmount}`);
    }
}


// Function 3
// Function to add a new account to bankDetails array
function addAccount(n,acc,amt) {
    //Creating an object to represent accounts
    let accounts = {
        name: n,    // Account Name
        account: acc, // Account Type
        amount: amt, // Account Amount 
    };

   // Push new account object to bankDetails array 
   bankDetails.push(accounts);
   // Display entered name, accout and amount in log
   console.log(`Sucessfully added new account: Name: ${n}, Account: ${acc}, Amount: ${amt}`);

}

// Function 4
// Function to remove an account from bankDetails array based on account name
function removeAccount(name) {
    // Finds if name entered exist in bankDetails array and assign name entered to variable "names"
    let names = bankDetails.find((n) => n.name === name)
    
        // If name not found, log error message and return null
        if(!names){
        console.log('Name entered is not found');
        return null
    }
    else{
        // else, find index of account in bankDetails array and assign to variable "index"
        var index = bankDetails.findIndex((n) => n.name === name);

        // Delete the account in the bankDetails array
        bankDetails.splice(index,1);

        // Return the updated bankDetails array
        return bankDetails; 
    }
} 

// Function 5
// Function to transfer account balance to one account to another inside bankDetails array
function transferMoney(sourceName, destinationName, tnframount) {
    // Find the source account name in the bankDetails array and assign to variable called "sourceAccount"
    var sourceAccount = bankDetails.find(n => n.name  === sourceName);
    // Find the destination account name in the bankDetails array and assign to variable called "destinationAccount"
    var destinationAccount = bankDetails.find(s => s.name === destinationName);

    // Check if both accounts exists
    if (sourceAccount &&  destinationAccount) {
      // Check if the source account has sufficient balance
      if (sourceAccount.amount >= tnframount) {
        // Deduct money from source account
        sourceAccount.amount = sourceAccount.amount - tnframount;
        // Add money to destination account
        destinationAccount.amount = destinationAccount.amount + tnframount;
        console.log(`Transferred money from ${sourceName} to ${destinationName}, amount of ${tnframount}`);
          // Displaying updated balances using for each loop
        bankDetails.forEach(n => {console.log(`Account ${n.name} New Balance: ${n.amount}`);
        
});
        console.log(bankDetails);

    }
    // If source amount is more than amount in account, log error message 
    else {
        console.log("Insufficient funds in the source account.");
    }

}
// If source source or destination account name does not exist in bankDetails array, log error message
 else {
      console.log("Source or destination account name does not exist.");
    }
  }


// Function 6
// Function to view individual account by entering account name  
function viewAccount(name) {
    // Finds if name entered exist in bankDetails array and assign name entered to variable "names"
    var names = bankDetails.find((n) => n.name === name);
    // Finds index of name entered in bankDetails array and assign to variable "index"
    var index = bankDetails.findIndex((n) => n.name === name);

    if(!names){
        // If name not found, log error message and return null
        console.log("Name does not exist");
        return null;
    }
    // else, it returns the account details in bankDetails array
    else{
        return bankDetails[index];
    }
}

//////////////////////////////////////////////////////////////////////

//Example Function 1:
// Input name as "salman" and amount "300"
// Depositing "300" in account of "salman" 
// console.log(depositCash("salman",300));

//Example Function 2:
// Withdrawing "400" in account of "salman"
// console.log(withdrawCash('salman', 400));

// Example Function 3:
// Adding account with name:"john"account type: "savings" and amount: "500".
// console.log(addAccount("john", "savings", 500));

// Display entered name and account and amount in log
// console.log(bankDetails);

// Example Function 4:
// Removing the account name that contains "hud"
// console.log(removeAccount("hud"));

// Example Function 5:
// Transferring amount of "200" from account name "salman" to "hud"
// console.log(transferMoney("salman","hud",200));

// Example Function 6:
// Viewing of account name "salman"
// console.log(viewAccount("salman"));
