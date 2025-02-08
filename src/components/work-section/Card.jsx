//Animation
import { motion } from "motion/react"

//Icons
import Send from "../../assets/send.svg?react"

//Constants
import { fadeInContainer, fadeInItem } from "../../constants/animations"

//Components
import Badge from "./Badge"


const Card = ({ card }) => {



    if (card.tags.length > 3) {
        card.tags = card.tags.slice(0, 3);
        card.tags.push("...")
    }

    return (
        <motion.article
            variants={fadeInContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

        >
            <motion.h3
                className="mb-2 font-title text-sm uppercase"
                variants={fadeInItem}
            >{card.title}</motion.h3>
            <motion.p
                className="mb-2 font-bold font-title text-lg text-primary uppercase"
                variants={fadeInItem}
            >{card.subtitle}</motion.p>
            <motion.div 
            className="flex items-center gap-2 mb-3"
            variants={fadeInContainer}
            >
                {
                    card.tags.map((tag, index) => (
                        <motion.div 
                        key={index}
                        variants={fadeInItem}
                        >
                            <Badge>{tag}</Badge>
                        </motion.div>
                    ))
                }
            </motion.div>
            <img className="mb-2 rounded-sm w-full object-cover" src={card.miniature} alt="" />
            <div className="flex justify-between items-center">
                <p>{card.date}</p>
                <a href={card.link} className="flex items-center gap-1 font-bold text-primary uppercase">Ver proyecto <Send /></a>
            </div>
        </motion.article>
    )
}

export default Card