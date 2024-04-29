import { useState } from 'react';
import TransactionTable from './Components/TransactionTable.jsx';
import AddTransaction from './Components/AddTransaction.jsx';
import SearchBar from './Components/SearchBar.jsx';
import TransactionList from './Components/TransactionList.jsx';
import './Components/Style.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleFilterTransactions = (term) => {
    setFilterTerm(term);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div>
      <AddTransaction onSubmit={handleAddTransaction} />
      <SearchBar onChange={handleFilterTransactions} />
      <TransactionList transactions={filteredTransactions} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
