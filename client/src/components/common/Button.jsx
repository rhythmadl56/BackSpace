const Button = ({ label = 'Button', variant = 'primary', ...props }) => {
  return (
    <button className={`btn btn-${variant}`} type="button" {...props}>
      {label}
    </button>
  )
}

export default Button
