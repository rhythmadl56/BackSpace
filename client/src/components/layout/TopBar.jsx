function TopBar() {
  return (
    <header className="topbar">

      <div className="logo">

        Backspace

      </div>

      <nav>

        <a href="#">Home</a>

        <a href="#">Journal</a>

        <a href="#">Friends</a>

        <a href="#">Messages</a>

        <a href="#">Explore</a>

      </nav>

      <input
        className="search"
        placeholder="Search..."
      />

    </header>
  );
}

export default TopBar;