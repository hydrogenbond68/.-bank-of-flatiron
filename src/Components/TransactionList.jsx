import React, { useState } from 'react';

// Mock transaction data
const mockTransactions = [
  { id: 1, date: '2022-04-20', description: 'Salary', amount: 200000 },
  { id: 2, date: '2022-04-21', description: 'Rent', amount: -12000 },
  { id: 3, date: '2022-04-22', description: 'Groceries', amount: -2000 },
  { id: 4, date: '2022-04-22', description: 'Lunch', amount: 500 },
  { id: 5, date: '2022-04-21', description: 'Drinks', amount: -1000 },
  { id: 6, date: '2022-04-23', description: 'Bill', amount: -20000 },
  { id: 7, date: '2022-04-23', description: 'Food', amount: 20000 },
  { id: 8, date: '2022-04-21', description: 'Tax', amount: -1500 },
  { id: 9, date: '2022-04-24', description: 'Farming', amount: -2500 },
  { id: 10, date: '2022-04-25', description: 'Househelp', amount: 35000 },
  { id: 11, date: '2022-04-25', description: 'Fruits', amount: -10000 },
  { id: 12, date: '2022-04-22', description: 'Building', amount: -200000 },
  { id: 13, date: '2022-04-26', description: 'isurnce', amount: 20500 },
  { id: 14, date: '2022-04-26', description: 'Car', amount: -750000 },
  { id: 15, date: '2022-04-27', description: 'Laptop', amount: -25000 },
];

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.type}</td>
            <td>${transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form input
    if (!description || !amount) return;
    // Create new transaction object
    const newTransaction = {
      id: Math.floor(Math.random() * 1000) + 1,
      date: new Date().toISOString().slice(0, 10),
      description,
      amount: parseFloat(amount),
    };
    // Call the onAddTransaction callback with the new transaction
    onAddTransaction(newTransaction);
    // Reset form fields
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

const App = () => {
  const [transactions, setTransactions] = useState(mockTransactions);

  const handleAddTransaction = (newTransaction) => {
    // Add the new transaction to the transactions array
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default App;
