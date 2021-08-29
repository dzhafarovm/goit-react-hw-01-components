import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => {
          if (friend.isOnline) {
            return (
              <li key={friend.id} className={css.item}>
                <span className={`${css.status} ${css.statusTrue}`}></span>
                <img
                  className={css.avatar}
                  src={friend.avatar}
                  alt={friend.name}
                  width="48"
                />
                <p className={css.name}>{friend.name}</p>
              </li>
            );
          } else
            return (
              <li key={friend.id} className={css.item}>
                <span className={`${css.status} ${css.statusFalse}`}></span>
                <img
                  className={css.avatar}
                  src={friend.avatar}
                  alt={friend.name}
                  width="48"
                />
                <p className={css.name}>{friend.name}</p>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
