const Badge = ({children, color}) => {
  return (
    <span className="bg-secondary-light/20 px-2 py-1 rounded-md font-bold text-secondary uppercase">
        {children}
    </span>
  )
}

export default Badge