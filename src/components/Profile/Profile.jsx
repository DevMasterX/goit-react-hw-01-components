import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  Photo,
  UserName,
  StatsList,
  StatsItem,
  Quantity,
} from 'components/Profile/profile.styled';

const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileWrap>
      <Description>
        <Photo src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
