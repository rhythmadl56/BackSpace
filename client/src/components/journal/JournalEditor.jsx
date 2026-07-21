import { useState } from "react";
import { createJournal } from "../../services/journalService";

function JournalEditor({
  onJournalCreated,
  showNotification,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [music, setMusic] = useState("");
  const [visibility, setVisibility] = useState("Public");
  const [mood, setMood] = useState("😊 Happy");

  // Loading state
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      showNotification(
        "Please enter a title and content.",
        "error"
      );
      return;
    }

    try {
      // Start loading
      setIsSaving(true);

      const response = await createJournal({
        title,
        content,
        music,
        visibility,
        mood,
      });

      const newJournal = response.data.data;

      onJournalCreated(newJournal);

      setTitle("");
      setContent("");
      setMusic("");
      setVisibility("Public");
      setMood("😊 Happy");

      showNotification(
        "Entry saved successfully!",
        "success"
      );
    } catch (err) {
      console.error(err);

      showNotification(
        "Failed to save journal.",
        "error"
      );
    } finally {
      // Stop loading whether success or error
      setIsSaving(false);
    }
  };

  return (
    <section className="panel composer-panel">

      <div className="panel-title composer-title">
        <div>
          <span>Dear Internet...</span>

          <p className="composer-note">
            Write like you're sending an old web letter.
          </p>
        </div>

        <span className="composer-badge">
          Journal Composer
        </span>
      </div>

      <div className="composer-body">
        <input
          placeholder="Journal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="What's living in your head today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="composer-row">
          <div className="composer-fields">
            <div className="field-group">
              <label>Listening To</label>

              <input
                placeholder="Music..."
                value={music}
                onChange={(e) => setMusic(e.target.value)}
              />
            </div>

            <div className="field-group">
              <label>Visibility</label>

              <select
                value={visibility}
                onChange={(e) =>
                  setVisibility(e.target.value)
                }
              >
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>

            <div className="field-group">
              <label>Mood</label>

              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              >
                <option>😊 Happy</option>
                <option>😌 Calm</option>
                <option>🤔 Thoughtful</option>
                <option>✨ Sparkly</option>
              </select>
            </div>
          </div>

          <button
            className="save-button"
            onClick={handleSubmit}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Entry"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default JournalEditor;