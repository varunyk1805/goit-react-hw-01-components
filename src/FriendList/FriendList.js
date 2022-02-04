import propTypes from "prop-types";
import styles from './FriendList.module.css';
import FriendListItem from '../FriendList/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    const friend_list = styles.friend_list;

    return (
        <>
            <ul className={friend_list}>
                {friends.map(friend =>
                (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </>
    )
};

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
};

export default FriendList;