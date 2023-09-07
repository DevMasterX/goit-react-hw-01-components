import { Friend, NameText, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Friend key={id}>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <NameText>{name}</NameText>
    </Friend>
  );
};

FriendListItem.propTypes = {};

export default FriendListItem;
