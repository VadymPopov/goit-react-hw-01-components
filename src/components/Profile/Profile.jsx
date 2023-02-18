import PropTypes from 'prop-types';
import { Container, Description, Image,InfoItem, Label, List, ListItem, UserName, Quantity } from './Profile.styled';

export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
  return (
    <Container>
      <Description>
        <Image src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <InfoItem >@{tag}</InfoItem>
        <InfoItem >{location}</InfoItem>
      </Description>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
          
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
    
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </List>
    </Container>)
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  })

};