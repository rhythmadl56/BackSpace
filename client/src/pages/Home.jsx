import { useEffect, useState } from "react";
import "../styles/home.css";

import Layout from "../components/layout/Layout";
import LeftSidebar from "../components/layout/LeftSidebar";
import RightSidebar from "../components/layout/RightSidebar";
import JournalEditor from "../components/journal/JournalEditor";
import JournalCard from "../components/journal/JournalCard";

import {
  getJournals,
  deleteJournal,
} from "../services/journalService";

function Home() {
  const [journals, setJournals] = useState([]);

  const [notification, setNotification] = useState({
    message: "",
    type: "",
  });

  const addJournal = (journal) => {
    setJournals((prev) => [journal, ...prev]);
  };

  const fetchJournals = async () => {
    try {
      const response = await getJournals();
      setJournals(response.data.data);
    } catch (error) {
      console.error("Failed to fetch journals:", error);
    }
  };

  const removeJournal = (id) => {
    setJournals((prev) =>
      prev.filter((journal) => journal._id !== id)
    );
  };

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification({
        message: "",
        type: "",
      });
    }, 3000);
  };

  const handleDelete = async (id) => {
    try {
      await deleteJournal(id);

      removeJournal(id);

      showNotification(
        "Entry deleted successfully!",
        "success"
      );
    } catch (error) {
      console.error(error);

      showNotification(
        "Failed to delete journal.",
        "error"
      );
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <Layout>

      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.type === "success" ? "✓ " : "✕ "}
          {notification.message}
        </div>
      )}

      <div className="homepage">
        <aside className="left-column">
          <LeftSidebar />
        </aside>

        <main className="center-column">
          <JournalEditor
            onJournalCreated={addJournal}
            showNotification={showNotification}
          />

          <section className="panel feed-panel">
            <div className="feed-header">
              <div>
                <h3>Journal Feed</h3>
                <p>Reverse chronological — no algorithm.</p>
              </div>

              <span className="feed-meta">
                Newest First
              </span>
            </div>

            {journals.length === 0 ? (
              <p
                style={{
                  padding: "20px",
                  color: "#666",
                }}
              >
                No journal entries yet.
              </p>
            ) : (
              journals.map((journal) => (
                <JournalCard
                  key={journal._id}
                  id={journal._id}
                  title={journal.title}
                  body={journal.content}
                  mood={journal.mood}
                  visibility={journal.visibility}
                  listening={journal.music}
                  timestamp={new Date(
                    journal.createdAt
                  ).toLocaleString()}
                  onDelete={handleDelete}
                />
              ))
            )}
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