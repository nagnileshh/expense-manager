import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const toDisplay =
    props.expenses.length === 0 ? (
      <h2 className="expenses-list__fallback">No Expenses to display </h2>
    ) : (
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
      </ul>
    );

  return toDisplay;
};

export default ExpensesList;
