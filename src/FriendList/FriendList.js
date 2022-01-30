import styles from './FriendList.module.css';

// Описание компонента <FriendList>
// Компонент должен принимать один проп friends - массив объектов друзей.

// Компонент должен создавать DOM следующей структуры.

const FriendList = ({ friends }) => {
    const friend_list = styles.friend_list;
    const item = styles.item;
    const status = styles.status;
    const avatar = styles.avatar;
    const name = styles.name;
    return (
        <>
            <ul className={friend_list}>
                {friends.map(friend =>
                (
                    <li key={friend.id} className={item}>
                        <span className={status}></span>
                        <img
                            className={avatar}
                            src={friend.avatar}
                            alt="User avatar"
                            width="48"
                        />
                        <p className={name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};


// avatar - ссылка на аватар
// name - имя друга
// isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
// В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

export default FriendList;