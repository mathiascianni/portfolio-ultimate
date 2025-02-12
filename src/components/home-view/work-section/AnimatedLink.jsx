import { NavLink, Link } from "react-router";
const AnimatedLink = ({ children, href, target="_self" }) => {
    return (
        <Link to={href} target={target} className="group inline-block relative p-2 lg:px-6 border border-primary rounded-xs w-full lg:max-w-max overflow-hidden font-title font-bold text-primary hover:text-secondary text-center lg:text-start uppercase transition-colors delay-75">
            <span className="-bottom-2 -left-2 absolute bg-primary rounded-full w-4 h-4 scale-0 group-hover:lg:scale-[20] group-hover:scale-[120] transition-all duration-500 ease-in-out"></span>
            <span className="relative">{children}</span>
        </Link>
    )
}

export default AnimatedLink