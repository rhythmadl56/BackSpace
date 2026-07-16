const FriendRequest = ({ name = 'Friend' }) => {
  return (
    <div className="friend-request">
      <span>{name}</span>
      <button type="button">Accept</button>
    </div>
  )
}

export default FriendRequest
