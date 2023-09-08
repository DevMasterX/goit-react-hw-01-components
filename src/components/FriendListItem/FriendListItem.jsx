import PropTypes from 'prop-types';

import { Friend, NameText, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Friend key={id}>
      <Status $isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <NameText>{name}</NameText>
    </Friend>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
