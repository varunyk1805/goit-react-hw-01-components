import styles from './Profile.module.css';

// // import user from '../user.json';
// const Description = (user) => {
//     console.log(user.username);
//     return (
//     <>
//         <img
//             src={user.avatar}
//             alt="User avatar"
//             className="avatar"
//         />
//         <p className="name">{user.username}</p>
//         <p className="tag">{user.tag}</p>
//         <p className="location">{user.location}</p>
//         </>
//     )
// };



// const Stats = (user) => (
//     <>
//         <li>
//             <span className='label'>followers</span>
//             <span className="quantity">{user.stats.followers}</span>
//         </li>
//         <li>
//             <span className='label'>views</span>
//             <span className="quantity">{user.stats.views}</span>
//         </li>
//         <li>
//             <span className='label'>likes</span>
//             <span className="quantity">{user.stats.likes}</span>
//         </li>
//     </>
// );



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

export default Profile;

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// /> 