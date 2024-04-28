// AddTransactionForm.js
import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000), // Simple ID generation for demo
      description,
      amount: parseFloat(amount),
      category
    };
    onAddTransaction(newTransaction);
    // Clear form fields after submission
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

