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


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="top-0 left-0 z-10 fixed md:px-tab lg:px-desk 2xl:px-desk-xl p-2 w-full">
            <div className="flex justify-between items-center border-primary bg-white/[0.03] backdrop-blur-sm p-4 border-b rounded-t-md w-full">
                <a href="#home"><Logo className="text-primary" /></a>
                <button
                    className="block lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="text-primary" />
                </button>
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
                    onClick={() => setIsOpen(!isOpen)}><Close  /></motion.button>
                <ul>
                    {navLinks.map(({ id, title }) => (
                        <motion.li
                            key={id}
                            variants={mobileMenuItems}
                            className="font-bold text-2xl text-dark"
                        >
                            <a href={`#${id}`} onClick={() => setIsOpen(!isOpen)}>{title}</a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar