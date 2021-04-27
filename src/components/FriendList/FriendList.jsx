import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={s.friendList}>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => {
          const classList = [s.status, isOnline && s.statusActive].join(' ');

          return (
            <li key={id} className={s.friendsListItem}>
              <span className={classList}></span>
              <img className={s.avatar} src={avatar} alt={name} width="48" />
              <p className={s.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FriendList;
