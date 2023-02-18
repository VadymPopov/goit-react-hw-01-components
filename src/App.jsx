import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { GlobalStyle } from "./GlobalStyles";
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { Layout } from "./components/Layout/Layout";
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
  <Layout>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
      <GlobalStyle/>
  </Layout>);
};
