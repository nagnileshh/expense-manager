import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsClicked(false);
  };

  const isClickedHandler = () => {
    setIsClicked(true);
  };

  const cancelAdding = () => {
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {!isClicked && (
        <button onClick={isClickedHandler}>Add New Expense</button>
      )}
      {isClicked && <ExpenseForm onCancel={cancelAdding} onSaveExpenseData={saveExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
