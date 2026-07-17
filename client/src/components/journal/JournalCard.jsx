const JournalCard = ({
  title = 'Untitled Entry',
  body = 'No content yet.',
  mood = '😌',
  timestamp = 'Today • 11:24 AM',
  visibility = 'Friends Only',
  listening = 'Quiet piano',
}) => {
  return (
    <article className="journal-card">
      <div className="journal-card-top">
        <span className="mood-chip">{mood}</span>
        <span className="visibility-pill">{visibility}</span>
        <span className="time-label">{timestamp}</span>
      </div>
      <h4>{title}</h4>
      <p className="preview">{body}</p>
      <div className="journal-card-bottom">
        <span>Listening to: {listening}</span>
        <div className="journal-actions">
          <button>Reply</button>
          <button>Bookmark</button>
          <button>Edit</button>
          <button className="danger">Delete</button>
        </div>
      </div>
    </article>
  );
};

export default JournalCard;
