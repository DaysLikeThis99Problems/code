// ! --Case Study: Budget Management for a Monthly Expense Tracker--

//A user wants to track their monthly 
//expenses and savings using a simple 
//JavaScript program. The user has an 
//income and several expenses like rent, 
//groceries, utilities, and entertainment. 
//The program needs to calculate how much 
//is spent, how much is saved, and what 
//percentage of the income has been spent.

/*
Scenario:
 * Monthly income: $3000
 * Monthly expenses:
 * Rent: $1200
 * Groceries: $600
 * Utilities: $300
 * Entertainment: $200

! Operations to be performed:

1. Calculate the total expenses.
2. Calculate the remaining savings after expenses.
3. Calculate the percentage of income spent.
*/

//SOLUTION:

//1.Calculate the total expenses.
let income=3000;
let expenses;
let rent=1200;
let groceries=600;
let utilities=300;
let entertainment=200;
expenses=rent+groceries+utilities+entertainment;

//2.Calculate the remaining savings after expenses.
let savings=income-expenses;

//3. Calculate the percentage of income spent.
let SpentPercentage=((expenses/income)*100).toFixed(2);