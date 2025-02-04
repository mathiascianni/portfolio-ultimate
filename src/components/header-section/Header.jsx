//Animation
import { motion } from "motion/react"

//Components
import LunarOrbit from "./LunarOrbit";

const Header = () => {
    const duration = 1.5;
    const initial = "inset(0% 0% 100% 0%)";
    const animate = "inset(0% 0% 0% 0%)";

    return (
        <header className="flex flex-col justify-center bg-gradient-to-t from-secondary-dark via-dark to-dark px-mob md:px-tab lg:px-desk 2xl:px-desk-xl pt-16 min-h-screen font-body text-primary-dark align-start">
            <div className="mb-16">
                <motion.h1
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                    }}
                    className="text-[2rem]"
                >
                    ¡Hola! soy <span className="font-bold text-primary">Mathias</span>
                </motion.h1>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 0.5,
                    }}
                    className="mb-4 text-[2rem]"
                >
                    Desarrollo interfaces modernas y eficientes
                </motion.p>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 1,
                    }}
                    className="mb-3 font-title text-2xl text-primary"
                >
                    NEXTJS <span className="text-primary-dark">|</span> ASTRO <span className="text-primary-dark">|</span> TAILWIND
                </motion.p>
                <motion.p
                    initial={{ clipPath: initial }}
                    animate={{ clipPath: animate }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        delay: 1.5,
                    }}
                    className=""
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
                    delay: 2,
                }}
                className="flex items-center"
            >
                <LunarOrbit />
            </motion.div>
        </header>
    )
}

export default Header