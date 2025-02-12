//Hooks
import { useState } from "react"

//Animation
import { motion } from "motion/react"

//Components
import Particle from "./Particle"

const ImageParticles = () => {


    return (
        <div className="relative flex flex-col items-center border-primary pt-12 border-b w-full md:max-w-[512px] overflow-hidden">
            <picture className="relative z-1 lg:-mb-px">
                <source media="(min-width: 768px )" srcSet="/media/desktop/photo.png" />
                <img src="/media/mobile/photo.png" alt="Mathias Cianni" />
            </picture>

            <Particle duration={2.5} xPos="left-[5%]" yPos="100%" size="w-8 h-8 lg:w-12 lg:h-12" />
            <Particle duration={2} xPos="left-[5%]" yPos="140%" size="w-8 h-8 lg:w-12 lg:h-12" />
            <Particle duration={2} xPos="left-[12%]" yPos="110%" size="w-16 h-16 lg:w-20 lg:h-20" />
            <Particle duration={4} xPos="left-[39%]" yPos="120%" size="w-24 h-24 lg:w-28 lg:h-28" />
            <Particle duration={5} xPos="left-[83%]" yPos="130%" size="w-12 h-12 lg:w-16 lg:h-16" />
            <Particle duration={6} xPos="left-[46%]" yPos="400%" size="w-24 h-24 lg:w-28 lg:h-28" />
            
        </div>
    )
}

export default ImageParticles