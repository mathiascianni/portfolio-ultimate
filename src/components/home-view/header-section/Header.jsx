//Animation
import { motion } from "motion/react"

//Components
import LunarOrbit from "./LunarOrbit";

const Header = () => {

    const container = {
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.3,
                when: "afterChildren"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: .4,
                delayChildren: .1,
            }
        }
    }

    const item = {
        hidden: {
            clipPath: "inset(0% 0% 100% 0%)",
            transition: {
                duration: 1,
            }
        },
        visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
                duration: 1,
                ease: "linear"
            }

        }
    }

    return (
        <header className="flex md:flex-row-reverse flex-col justify-center md:items-center bg-gradient-to-t from-secondary-dark via-dark to-dark px-mob md:px-tab lg:px-desk 2xl:px-desk-xl pt-16 min-h-screen font-body text-primary-dark align-start">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="mb-16 w-full">
                <motion.h1
                    variants={item}
                    className="text-4xl lg:text-5xl xl:text-6xl"
                >
                    ¡Hola! soy <span className="font-bold text-primary">Mathias</span>
                </motion.h1>
                <motion.p
                    variants={item}
                    className="mb-4 text-4xl lg:text-5xl xl:text-6xl"
                >
                    Desarrollo interfaces modernas y eficientes
                </motion.p>
                <motion.p
                    variants={item}
                    className="mb-3 font-title text-primary text-2xl lg:text-4xl"
                >
                    NEXTJS <span className="text-primary-dark">|</span> ASTRO <span className="text-primary-dark">|</span> TAILWIND
                </motion.p>
                <motion.p
                    variants={item}
                    className="lg:text-2xl"
                >
                    Actualmente desarrollando como <span className="font-bold text-primary">freelancer</span> a clientes de todo el mundo
                </motion.p>
            </motion.div>
            <motion.div className="flex items-center w-full">
                <LunarOrbit />
            </motion.div>
        </header>
    )
}

export default Header