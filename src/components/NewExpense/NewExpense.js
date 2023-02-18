import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false);
    const saveExpensehandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditting(false);
    }

    const startEdittingHandler = () => {
        setIsEditting(true);
    }

    const stopEdittingHandler = () => {
        setIsEditting(false);
    }
    return <div className="new-expense">
        {!isEditting && <button onClick={startEdittingHandler}>Add New Expense</button>}
        {isEditting && <ExpenseForm onSaveExpenseData={saveExpensehandler} onCancel={stopEdittingHandler} />}
    </div>
}
export default NewExpense;  