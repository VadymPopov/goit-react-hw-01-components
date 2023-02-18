import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name} />
            ))}
        </List>)
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    }))
    .isRequired,
};