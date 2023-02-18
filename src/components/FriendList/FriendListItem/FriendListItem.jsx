import PropTypes from 'prop-types';
import { Image, Item, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (<Item key={id}>
    <Status isOnline={isOnline}>{isOnline}</Status>
    <Image src={avatar} alt={name} width="48" />
    <Name>{name}</Name>
  </Item>
  )
};


FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};