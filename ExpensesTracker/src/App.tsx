import React, { useState } from "react";

import ExpensesList from "./ExpensesTracker/ExpensesList";
import ExpensesFilter from "./ExpensesTracker/ExpensesFilter";
import ExpensesForm from "./ExpensesTracker/ExpensesForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

const App = () => {
  const [listofItem, setListOfItem] = useState([
    { id: 1, description: "áaa", amount: 50, category: "Groceries" },
    { id: 2, description: "bbb", amount: 35, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? listofItem.filter((e) => e.category === selectedCategory)
    : listofItem;
  return (
    <div className="col-8">
      <div className="mb-3">
        <ExpensesForm />
      </div>

      <div className="mb-3">
        <ExpensesFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
      </div>
      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) => setListOfItem(listofItem.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
