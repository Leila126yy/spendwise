# SpendWise - Make SpendWise Interactive

## What improvements were made this week
Added interactive budgeting: user can set income, add expenses, see total, balance and feedback live on the page.

## How conditionals are used
- In `calculateBalance()` and `updateDashboard()` using `if / else if / else` to show Over Budget, Warning over 80%, Good job, etc.
- Validation: if income or expense is invalid, show alert.

## How arrays are used
`let expenses = []` stores objects like `{name, amount, category}`. New expenses are added with `push()`.

## How the DOM is updated
Using `getElementById()` and `textContent` to update income, total, balance and message. `createElement()` + `appendChild()` for expense list.

## How user interactions are handled through events
Using `addEventListener("click", ...)` on Set Income, Add Expense and Clear buttons.

## Challenges and how they were resolved
- Empty inputs: solved with validation checks.
- Balance going negative: solved with conditional warning message.

## How to run
Open `index.html` in browser.