import React from "react";

import ExpensesList from "./ExpensesTracker/expensesList";

const App = () => {
  const ListofItem = [
    { id: 1, description: "áaa", amount: 50, category: "fruits" },
    { id: 2, description: "bbb", amount: 35, category: "Vegetables" },
  ];

  return (
    <div>
      <ExpensesList
        expenses={ListofItem}
        onDelete={() => console.log("Deleted")}
      />
    </div>
  );
};

export default App;
