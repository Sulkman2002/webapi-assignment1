# Simple Banking System

This simple banking system is implemented in JavaScript and allows you to perform various operations such as depositing cash, withdrawing cash, adding new accounts, removing accounts, transferring money, and viewing individual account details.

## Table of Contents
- [Functions](#functions)
  - [1. Deposit Cash](#1-deposit-cash)
  - [2. Withdraw Cash](#2-withdraw-cash)
  - [3. Add Account](#3-add-account)
  - [4. Remove Account](#4-remove-account)
  - [5. Transfer Money](#5-transfer-money)
  - [6. View Account](#6-view-account)

 ## Functions
 ### 1. Deposit Cash
```bash
depositCash(name, cashIn)
```

Function to deposit cash into an account.
- 'name': Name of the account holder.
- 'cashIn': Amount of deposit.



### 2. Withdraw Cash
```bash
withdrawCash(name, cashOut)
```
Function to withdraw cash from account.
- 'name': Name of the account holder.
- 'cashIn': Amount of withdraw.



### 3. Add Account
```bash
addAccount(name, accountType, amount)
```  
Function to add a new account to the system.
- 'name': Name of the account holder.
- 'accountType': Type of account(e.g savings).
- 'amount': Initial amount in the account.



### 4. Remove Account
```bash
removeAccount(name)
```  
Function to remove an account to the system based on the account name.
- 'name': Name of the account holder.


### 5. Transfer Money
```bash
transferMoney(sourceName, destinationName, transferAmount)
```  
Function to transfer money from one account to another.
- 'sourceName': Name of the source account holder.
- 'destinationName': Name of the destination account holder.
- 'transferAmount': Initial amount in the account.


### 6. Remove Account
```bash
viewAccount(name)
```  
Function to view individual account details.
- 'name': Name of the account holder.


## Example Usage

```bash
console.log(depositCash("salman", 300));
console.log(withdrawCash("salman", 100));
console.log(addAccount("john", "current", 500));
console.log(removeAccount("hud"));
console.log(transferMoney("salman", "hud", 200));
console.log(viewAccount("salman"));
```
Feel free to explore and test different scenarios using these functions.
