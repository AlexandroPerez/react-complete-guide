import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function ExpensesList(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpensesList;
