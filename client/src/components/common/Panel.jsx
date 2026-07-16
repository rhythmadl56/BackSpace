const Panel = ({ title, children, className = '' }) => {
  return (
    <section className={`panel ${className}`.trim()}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  )
}

export default Panel
