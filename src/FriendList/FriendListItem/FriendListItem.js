import propTypes from "prop-types";
import styles from './FriendListItem.module.css';

const FriendListItem = (friend) => {
    const item = styles.item;
    const statusIsOnline = styles.statusIsOnline;
    const statusIsOffline = styles.statusIsOffline;
    const avatar = styles.avatar;
    const name = styles.name;   

    return (       
        <>
            <li className={item}>
                {friend.isOnline ? (
                    <span className={statusIsOnline}></span>
                    ) : (
                        <span className={statusIsOffline}></span>
                        )}
                <img
                    className={avatar}
                    src={friend.avatar}
                    alt="User avatar"
                    width="48"
                    />
                <p className={name}>{friend.name}</p>
            </li>
        </>
    );
};

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;