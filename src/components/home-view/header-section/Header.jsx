//Animation
import { motion } from "motion/react"

//Components
import LunarOrbit from "./LunarOrbit";

const Header = () => {
    const duration = .8;
    const initial = "inset(0% 0% 100% 0%)";
    const animate = "inset(0% 0% 0% 0%)";

    return (
        <header className="flex md:flex-row-reverse flex-col justify-center md:items-center bg-gradient-to-t from-secondary-dark via-dark to-dark px-mob md:px-tab lg:px-desk 2xl:px-desk-xl pt-16 min-h-screen font-body text-primary-dark align-start">
            <div className="mb-16 w-full">
                <motion.h1
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                    }}
                    className="text-4xl lg:text-5xl xl:text-6xl"
                >
                    ¡Hola! soy <span className="font-bold text-primary">Mathias</span>
                </motion.h1>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 0.2,
                    }}
                    className="mb-4 text-4xl lg:text-5xl xl:text-6xl"
                >
                    Desarrollo interfaces modernas y eficientes
                </motion.p>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 0.4,
                    }}
                    className="mb-3 font-title text-primary text-2xl lg:text-4xl"
                >
                    NEXTJS <span className="text-primary-dark">|</span> ASTRO <span className="text-primary-dark">|</span> TAILWIND
                </motion.p>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 0.6,
                    }}
                    className="lg:text-2xl"
                >
                    Actualmente desarrollando como <span className="font-bold text-primary">freelancer</span> a clientes de todo el mundo
                </motion.p>
            </div>
            <motion.div
                initial={{ 
                    opacity: 0,
                    y: 10
                 }}
                animate={{ 
                    opacity: 1,
                    y: 0
                 }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                    delay: 0.8,
                }}
                className="flex items-center w-full"
            >
                <LunarOrbit />
            </motion.div>
        </header>
    )
}

export default Header