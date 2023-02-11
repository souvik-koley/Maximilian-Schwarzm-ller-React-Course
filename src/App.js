import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        { id: 'e1', title: 'Toilet Paper', amount: 140.25, date: new Date(2023, 2, 11) },
        { id: 'e2', title: 'New TV', amount: 150.25, date: new Date(2023, 2, 12) },
        { id: 'e3', title: 'Car Insurance', amount: 160.25, date: new Date(2023, 2, 13) },
        { id: 'e4', title: 'Home Rent', amount: 170.25, date: new Date(2023, 2, 14) },
    ]
    return (
        <div>
            <h1>Getting Started</h1>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
        </div>
    );
}
export default App;