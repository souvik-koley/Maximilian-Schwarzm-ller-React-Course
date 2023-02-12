import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpensehandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
      props.onAddExpense(expenseData)
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpensehandler} />
    </div>
}
export default NewExpense;  