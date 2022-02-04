import propTypes from "prop-types";
import styles from './Profile.module.css';

const Profile = (user) => {
    const profile = styles.profile;
    const description = styles.description;
    const avatar = styles.avatar;
    const name = styles.name;
    const tag = styles.tag;
    const location = styles.location;
    const stats = styles.stats;
    const label = styles.label;
    const quantity = styles.quantity;

    return (
        <>
            <div className={profile}>
                <div className={description}>
                    <img
                        src={user.avatar}
                        alt="User avatar"
                        className={avatar}
                    />
                    <p className={name}>{user.username}</p>
                    <p className={tag}>@{user.tag}</p>
                    <p className={location}>{user.location}</p>
                </div>
                <ul className={stats}>
                    <li>
                        <span className={label}>Followers</span>
                        <span className={quantity}>{user.stats.followers}</span>
                    </li>
                    <li>
                        <span className={label}>Views</span>
                        <span className={quantity}>{user.stats.views}</span>
                    </li>
                    <li>
                        <span className={label}>Likes</span>
                        <span className={quantity}>{user.stats.likes}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.object.isRequired,
};

export default Profile;