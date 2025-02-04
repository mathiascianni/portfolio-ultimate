//Hooks
import { useState } from "react"

//Animation
import { motion } from "motion/react"

const Particle = ({ yPos,xPos, duration, size }) => {
    const [position, setPosition] = useState({ top: yPos, rotate: 0 });
    return (
        <motion.div
            key={position.y} // Forzar re-render cuando cambia la posición
            initial={{ top: yPos, rotate: 0 }}
            animate={{ top: "-100%", rotate: 360 }}
            transition={{ duration: duration, ease: "linear", repeat: Infinity }}
            onAnimationComplete={() => setPosition({ top: yPos, rotate: 0 })} // Reiniciar posición
            className={`top-full absolute bg-primary mx-auto ${xPos} ${size}`}
        ></motion.div>
    )
}

export default Particle