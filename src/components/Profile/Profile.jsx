import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Image,
  Username,
  Usertag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  location,
  stats: { followers, views, likes },
  tag,
  username,
}) => {
  return (
    <Card>
      <Description>
        <Image src={avatar} alt={username} />
        <Username>{username}</Username>
        <Usertag>{tag}</Usertag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  stats: PropTypes.objectOf(PropTypes.number),
  username: PropTypes.string,
};
