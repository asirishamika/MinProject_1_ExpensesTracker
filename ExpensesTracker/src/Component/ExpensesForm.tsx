import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ExpensesForm = () => {
  const categories = ["Vegetables", "Fruits", "bevarages"];
  const schema = z.object({
    description: z
      .string()
      .min(20, { message: "Description must have at least 20 characters" }),
    amount: z
      .number({ invalid_type_error: "amount field is required" })
      .min(0, { message: "Entered amount should not be zero or negative" }),

    categories: z.string(),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        className="col-6"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="label-form">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            name="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="label-form">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            name="amount"
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Categories
          </label>
          <select id="categories" className="form-select">
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpensesForm;
