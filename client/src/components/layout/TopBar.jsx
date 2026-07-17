import "../../styles/topbar.css";

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-title">Backspace</div>
      <div className="topbar-right">
        <nav className="topbar-nav">
          <a href="#">Home</a>
          <a href="#">Journal</a>
          <a href="#">Friends</a>
          <a href="#">Messages</a>
          <a href="#">Profile</a>
          <a href="#">Settings</a>
        </nav>
        <div className="topbar-search">
          <input className="search-input" placeholder="Search..." />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
