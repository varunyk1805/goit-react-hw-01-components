import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './index.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

    
ReactDOM.render(
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
    </>,
    document.getElementById('root')
);

Profile.PropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};

Statistics.PropTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

FriendList.PropTypes = {
    friends: PropTypes.array.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

TransactionHistory.PropTypes = {
    items: PropTypes.array.isRequired,
};