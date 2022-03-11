import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

let filteredExpenses = [];

export default function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("Select");

  const onYearSelection = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const expenses = props.expenses;

  filteredExpenses = expenses.filter((element) => {
    return element.date.getFullYear() === +filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelection={onYearSelection}
        />
        {filteredYear !== "Select" && (
          <ExpensesChart
            expenses={filteredExpenses}
          />
        )}
        <ExpensesList
          expenses={filteredYear === "Select" ? expenses : filteredExpenses}
        />
      </Card>
    </div>
  );
}
