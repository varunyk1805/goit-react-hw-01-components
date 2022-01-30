import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './index.css';
import Profile from './Profile/Profile';
import user from './user.json'
    
ReactDOM.render(
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />,
    document.getElementById('root')
);

Profile.PropTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};