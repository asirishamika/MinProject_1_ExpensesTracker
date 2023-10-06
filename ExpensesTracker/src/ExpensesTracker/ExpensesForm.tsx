import React from "react";
import { categories } from "../App";

const ExpensesForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="label-form">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="label-form">
            Categories
          </label>
          <select id="category" className="form-select">
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpensesForm;
