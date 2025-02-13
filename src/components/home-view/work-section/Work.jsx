//Animation
import { motion } from "motion/react"
import { fadeInContainer } from "../../../constants/animations"

//Constants
import { projects } from "../../../constants/projects"

//Components
import Card from "./Card"
import AnimatedLink from "./AnimatedLink"

const Work = () => {
  const limitProjects = projects.slice(0, 3);

  return (
    <section className="my-16 lg:my-32 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl">
      <h2 className="mb-6 font-title font-bold text-2xl uppercase">Desarrollado con pasión y detalle</h2>
      <motion.div
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        {
          limitProjects.map((card, index) => (
            <Card card={card} key={index} index={index} />
          ))
        }

        <AnimatedLink href="/works" >Explorar todos</AnimatedLink>
      </motion.div>
    </section>
  )
}

export default Work