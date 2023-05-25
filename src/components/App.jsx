import user from 'path/to/user.json'
import data from 'path/to/data.json'
import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics';

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
        color: '#010101'
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
    </div>
  );
};
