//Hooks
import { useState } from "react";

//Animation
import { motion } from "motion/react";

//Constants
import { navLinks } from "../constants";
import { mobileMenuContainer, mobileMenuItems } from "../constants/animations";

//Components
import Logo from "../assets/matna-logo.svg?react";
import Menu from "../assets/menu.svg?react";
import Close from "../assets/close.svg?react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="top-0 left-0 z-10 fixed p-2 md:px-tab lg:px-desk 2xl:px-desk-xl w-full">
            <div className="flex justify-between items-center bg-white/[0.03] backdrop-blur-sm p-4 border-primary border-b rounded-t-md w-full">
                <NavLink to="/"><Logo className="text-primary-dark" /></NavLink>
                <button
                    className="lg:hidden block"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="text-primary-dark" />
                </button>
                <div className="hidden lg:block">
                    <ul className="flex gap-4">
                        {
                            navLinks.map((item, index) => (
                                <motion.li
                                    className="text-primary-dark"
                                    key={index}
                                    variants={mobileMenuItems}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <NavLink to={item.path} className={({ isActive }) => isActive ? "bg-secondary clip-styled-bg py-1 px-4 text-primary font-bold uppercase" : ""}>{item.title}</NavLink>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={mobileMenuContainer}
                initial="closed"
                className={`top-0 left-0 z-[1] absolute flex flex-col justify-center items-center lg:hidden bg-primary w-full h-screen ${!isOpen && "pointer-events-none"}`}>
                <motion.button
                    variants={{
                        open: {
                            opacity: 1,
                            y: 10,
                            transition: {
                                delay: .8,
                                ease: "easeInOut"
                            }
                        },
                        closed: {
                            opacity: 0,
                            y: 0,
                            transition: {
                                duration: 0.3,
                                ease: "easeInOut"
                            }
                        }
                    }}
                    className="top-4 right-6 absolute"
                    onClick={() => setIsOpen(!isOpen)}><Close />
                </motion.button>
                <ul className="flex flex-col gap-2 uppercase">
                    {
                        navLinks.map((item, index) => (
                            <motion.li
                                className="font-bold text-dark text-2xl"
                                key={index}
                                variants={mobileMenuItems}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <NavLink to={item.path} className={({ isActive }) => isActive ? "bg-secondary clip-styled-bg py-1 px-4 text-primary font-bold uppercase" : ""}>{item.title}</NavLink>
                            </motion.li>
                        ))
                    }
                </ul>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar