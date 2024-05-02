import { useState } from 'react';
import TransactionTable from './Components/TransactionTable.jsx';
import SearchBar from './Components/SearchBar.jsx';
import TransactionList from './Components/TransactionList.jsx';
import './Components/Style.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  const handleFilterTransactions = (term) => {
    setFilterTerm(term);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onChange={handleFilterTransactions} />
      <TransactionList transactions={filteredTransactions} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
