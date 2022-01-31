import styles from './FriendListItem.module.css';

const FriendListItem = (friend) => {
    const statusIsOnline = styles.statusIsOnline;
    const statusIsOffline = styles.statusIsOffline;
    const avatar = styles.avatar;
    const name = styles.name;   

    return (
        <>
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
        </>
    );
};

export default FriendListItem;