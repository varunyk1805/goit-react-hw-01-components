import propTypes from "prop-types";
import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    const friend_list = styles.friend_list;
    const item = styles.item;

    return (
        <>
            <ul className={friend_list}>
                {friends.map(friend =>
                (
                    <li key={friend.id} className={item}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
};

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

export default FriendList;