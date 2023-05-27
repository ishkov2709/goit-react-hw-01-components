import user from 'path/to/user.json'
import data from 'path/to/data.json'
import friends from 'path/to/friends.json'
import transactions from 'path/to/transactions.json'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        fontSize: 40,
        color: '#010101',
        padding: '20px 0',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
