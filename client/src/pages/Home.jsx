import "../styles/home.css";

import Layout from "../components/layout/Layout";
import LeftSidebar from "../components/layout/LeftSidebar";
import RightSidebar from "../components/layout/RightSidebar";
import JournalCard from "../components/journal/JournalCard";

function Home() {
  return (
    <Layout>
      <div className="homepage">
        <aside className="left-column">
          <LeftSidebar />
        </aside>

        <main className="center-column">
          <section className="panel composer-panel">
            <div className="panel-title composer-title">
              <div>
                <span>Dear Internet...</span>
                <p className="composer-note">Write like you're sending an old web letter.</p>
              </div>
              <span className="composer-badge">Journal Composer</span>
            </div>
            <div className="composer-body">
              <input placeholder="Journal title" />
              <textarea placeholder="What's living in your head today?" />
              <div className="composer-row">
                <div className="composer-fields">
                  <div className="field-group">
                    <label>Listening To</label>
                    <input placeholder="E.g. Arcade Fire, rain on the roof" />
                  </div>
                  <div className="field-group">
                    <label>Visibility</label>
                    <select>
                      <option>Public</option>
                      <option>Friends Only</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label>Mood</label>
                    <select>
                      <option>😊 Happy</option>
                      <option>😌 Calm</option>
                      <option>🤔 Thoughtful</option>
                      <option>✨ Sparkly</option>
                    </select>
                  </div>
                </div>
                <button className="save-button">Save Entry</button>
              </div>
            </div>
          </section>

          <section className="panel feed-panel">
            <div className="feed-header">
              <div>
                <h3>Journal Feed</h3>
                <p>Reverse chronological — no algorithm.</p>
              </div>
              <span className="feed-meta">Newest first</span>
            </div>

            <JournalCard
              title="A slow evening in my room"
              body="The window is open and the air smells faintly of old paper and coffee. I wrote a short note to myself and saved it as if I were writing to a friend."
              mood="😌"
              timestamp="Today • 8:34 PM"
              visibility="Friends Only"
              listening="The Postal Service"
            />
            <JournalCard
              title="Offline monday"
              body="I unplugged for a while and walked the neighborhood. The radios in the stores were playing soft indie tracks. It felt calm."
              mood="🎮"
              timestamp="Today • 4:12 PM"
              visibility="Public"
              listening="Arcade Fire"
            />
            <JournalCard
              title="Drafts of summer"
              body="I am saving a few thoughts for later, the way I used to keep a paper journal under my bed."
              mood="✨"
              timestamp="Yesterday • 9:06 PM"
              visibility="Private"
              listening="Dinosaur Jr."
            />
          </section>
        </main>

        <aside className="right-column">
          <RightSidebar />
        </aside>
      </div>
    </Layout>
  );
}

export default Home;
