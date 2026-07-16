const Input = ({ label, ...props }) => {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      {label ? <span>{label}</span> : null}
      <input {...props} />
    </label>
  )
}

export default Input
