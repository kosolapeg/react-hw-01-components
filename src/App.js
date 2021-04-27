import './components/Profile/Profile';
import Profile from './components/Profile/';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory';
import transactions from './components/TransactionHistory/transaction.json';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
