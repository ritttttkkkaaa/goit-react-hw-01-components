import css from './FriendList.module.css'
import PropTypes  from 'prop-types'


export const FriendList = ({friends})  => {
  return ( 
    <ul className={css.friendslist}>
       {friends.map(friends => 
        <li key={friends.id} className={css.item}>
        <span className=
        {friends.isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.offline}`}
        ></span>
        <img className={css.avatar} src={friends.avatar}alt={friends.name} width="48" />
        <p className={css.name}>{friends.name}</p>
     </li>
       )}
   </ul>
  )
}


FriendList.prototype = {
    friends: PropTypes.array.isRequired
}

export default FriendList;