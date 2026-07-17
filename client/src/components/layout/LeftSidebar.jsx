function LeftSidebar() {
  return (
    <>
      <div className="panel">
        <div className="profile-card">
          <div className="profile-photo">Photo</div>
          <h2>Ashley</h2>
          <p className="online">● Online</p>
          <p className="member">Member since Dec 2024</p>
        </div>
      </div>

      <div className="panel">
        <div className="panel-title">Status Message</div>
        <input className="status-input" placeholder="What's up?" />
        <div className="status-actions">
          <button className="status-button">Set</button>
        </div>
      </div>

      <div className="panel">
        <div className="panel-title">Navigation</div>
        <ul className="nav-list">
          <li>📝 New Entry</li>
          <li>📚 View All</li>
          <li>⭐ Favorites</li>
          <li>🔒 Private</li>
          <li>📂 Drafts</li>
        </ul>
      </div>

      <div className="panel">

        <div className="panel-title">

          Tip

        </div>

        <div className="tip-box">

          Write one honest thought today.

        </div>

      </div>

    </>
  );
}

export default LeftSidebar;