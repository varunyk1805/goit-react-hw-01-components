import propTypes from "prop-types";
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

    
const App = () =>(
    <>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics
            title="Upload stats"
            stats={data}
        />
        <FriendList
            friends={friends}
        />
        <TransactionHistory
            items={transactions}
        />
    </>
);

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.object.isRequired,
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.array.isRequired,
};

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
};

TransactionHistory.propTypes = {
    items: propTypes.array.isRequired,
};

export default App;