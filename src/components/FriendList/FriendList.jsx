import PropTypes from 'prop-types';
import { FriendListWrap } from './FriendList.styled';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
