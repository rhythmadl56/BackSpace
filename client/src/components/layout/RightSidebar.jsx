const RightSidebar = () => {
  const requests = [
    { name: "Marnie", note: "Long time no see" },
    { name: "Eli", note: "Met at coffeehouse" },
  ];

  const onlineFriends = [
    { name: "Noah", status: "Online" },
    { name: "Lina", status: "Away" },
    { name: "Jon", status: "Busy" },
  ];

  return (
    <aside className="sidebar right-sidebar">
      <section className="panel request-panel">
        <h3>Friend Requests</h3>
        <div className="request-list">
          {requests.map((request) => (
            <div key={request.name} className="request-item">
              <div>
                <strong>{request.name}</strong>
                <div className="small-text">{request.note}</div>
              </div>
              <div className="request-actions">
                <button className="small-button">Accept</button>
                <button className="small-button ghost">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h3>Online Friends</h3>
        <ul className="friend-list">
          {onlineFriends.map((friend) => (
            <li key={friend.name}>
              <span className={`status-dot ${friend.status.toLowerCase()}`} />
              <span>{friend.name}</span>
              <span className="friend-status">{friend.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <h3>Recent Visitors</h3>
        <ul className="visitor-list">
          <li>Mae • 10m ago</li>
          <li>Jon • 45m ago</li>
          <li>Tariq • 1h ago</li>
        </ul>
      </section>

      <section className="panel birthday-panel">
        <h3>Birthdays</h3>
        <div className="birthday-row">
          <div>
            <strong>Holly</strong>
            <div className="small-text">Today</div>
          </div>
          <button className="small-button">Send Card</button>
        </div>
      </section>

      <section className="panel collapsed-panel">
        <h3>Offline Friends</h3>
        <p className="small-text">12 friends are offline. Click to open Messenger.</p>
      </section>
    </aside>
  );
};

export default RightSidebar;
