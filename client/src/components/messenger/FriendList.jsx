const FriendList = ({ friends = [] }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  )
}

export default FriendList
