const JournalCard = ({ title = 'Untitled Entry', body = 'No content yet.' }) => {
  return (
    <article className="journal-card">
      <h4>{title}</h4>
      <p>{body}</p>
    </article>
  )
}

export default JournalCard
