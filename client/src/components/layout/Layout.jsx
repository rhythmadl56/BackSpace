import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="page">

      <TopBar />

      <div className="content">

        <aside className="left-sidebar">

          <div className="panel">

            <h3>Your Profile</h3>

            <p>😊 Happy</p>

            <p>Guestbook</p>

            <p>Archive</p>

          </div>

        </aside>

        <main className="main-content">

          {children}

        </main>

        <aside className="right-sidebar">

          <div className="panel">

            <h3>Friend Requests</h3>

            <p>• Sarah</p>

            <p>• Alex</p>

          </div>

          <div className="panel">

            <h3>Friends Online</h3>

            <p>🟢 Emily</p>

            <p>🟢 Chris</p>

            <p>🟡 Ryan</p>

            <p>⚫ Lucas</p>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default Layout;