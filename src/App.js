import { expensesData } from "./data/expenses";
import ExpensesList from "./components/ExpensesList";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList expenses={expensesData} />
    </div>
  );
}

export default App;
