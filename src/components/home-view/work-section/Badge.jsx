import { Link } from "react-router"

const Badge = ({ children, isLink = false, tech = null }) => {
  return (
    <>
      {
        !isLink ? (
          <span className="bg-secondary-light/20 px-3 py-1 rounded-sm font-bold text-secondary uppercase line-clamp-1" >
            {children}
          </span >
        ) : (
          <Link to={`/works?tech=${encodeURIComponent(tech)}`}>
            <span className="bg-secondary-light/20 hover:bg-primary/60 px-3 py-1 rounded-sm font-bold text-secondary hover:text-primary uppercase line-clamp-1 transition-colors cursor-pointer" >
              {children}
            </span >
          </Link>
        )
      }
    </>
  )
}

export default Badge