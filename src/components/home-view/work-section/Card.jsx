//Animation
import { motion } from "motion/react"

//Icons
import Send from "../../../assets/send.svg?react"

//Constants
import { fadeInContainer, fadeInItem, imageAnimation } from "../../../constants/animations"

//Components
import Badge from "./Badge"


const Card = ({ card, index }) => {
    let tags = [];

    if (card.tags.length > 3) {
        tags = card.tags.slice(0, 3);
        tags.push("...")
    }

    return (
        <article
        >
            <motion.a
                initial="initial"
                whileHover={index % 2 === 0 ? "animateR" : "animateL"}
                href={`/works/${card.id}`}
                className="group inline-block relative hover:px-6 pb-6 border-primary hover:border-secondary border-b w-full transition-all"
            >
                <div className="flex gap-2">
                    <p className="mb-2">{card.date}</p>
                    <p>{card.type}</p>
                </div>
                <h3 className="group-hover:text-secondary mb-4 font-title font-bold text-primary text-3xl uppercase transition-colors duration-300">{card.title}</h3>
                <motion.img variants={imageAnimation} src={card.miniature} alt="" className="invisible right-4 bottom-0 absolute rounded-sm w-[320px] h-[180px] object-center object-cover pointer-events-none lg:visible" />
                <div className="flex gap-2">
                    {
                        tags.map((tag, index) => (
                            <Badge key={index} color="secondary">{tag}</Badge>
                        ))
                    }
                </div>
            </motion.a>
        </article>
    )
}

export default Card