const Badge = ({ children }) => {
  return (
    <span className="bg-secondary-light/20 px-3 py-1 rounded-sm font-bold text-secondary uppercase">
      {children}
    </span>
  )
}

export default Badge