let expenses = [];
let income = 0;

function calculateBalance(income, totalExpenses) {
  return income - totalExpenses;
}

function getTotalExpenses() {
  let total = 0;
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }
  return total;
}

function updateDashboard() {
  let total = getTotalExpenses();
  let balance = calculateBalance(income, total);

  document.getElementById("incomeDisplay").textContent = income;
  document.getElementById("totalDisplay").textContent = total;
  document.getElementById("balanceDisplay").textContent = balance;

  let messageEl = document.getElementById("message");
  if (income === 0) {
    messageEl.textContent = "Enter your income to start.";
  } else if (balance < 0) {
    messageEl.textContent = "⚠️ Over budget! You spent more than your income.";
  } else if (balance === 0) {
    messageEl.textContent = "You have used all your income.";
  } else if (total > income * 0.8) {
    messageEl.textContent = "⚠️ Warning: You have used over 80% of your income.";
  } else {
    messageEl.textContent = "✅ Good job! You are within budget.";
  }

  let list = document.getElementById("expenseList");
  list.innerHTML = "";
  for (let expense of expenses) {
    let li = document.createElement("li");
    li.textContent = `${expense.name} - ${expense.category} - Ksh ${expense.amount}`;
    list.appendChild(li);
  }
}

document.getElementById("setIncomeBtn").addEventListener("click", function() {
  let value = Number(document.getElementById("incomeInput").value);
  if (value > 0) {
    income = value;
    updateDashboard();
  } else {
    alert("Please enter a valid income");
  }
});

document.getElementById("addExpenseBtn").addEventListener("click", function() {
  let name = document.getElementById("expenseName").value;
  let amount = Number(document.getElementById("expenseAmount").value);
  let category = document.getElementById("expenseCategory").value;

  if (name === "" || amount <= 0) {
    alert("Enter expense name and valid amount");
    return;
  }
  expenses.push({ name: name, amount: amount, category: category });
  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
  updateDashboard();
});

document.getElementById("clearBtn").addEventListener("click", function() {
  expenses = [];
  updateDashboard();
});

updateDashboard();