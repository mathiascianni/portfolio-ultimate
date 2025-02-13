//Hooks
import { useEffect } from "react";

//Animation
import { motion } from "motion/react"
import { fadeInContainer } from "../constants/animations";

//Layout
import Layout from "../layout/Layout"

//Constants
import { projects } from "../constants/projects"

//Components
import Card from "../components/home-view/work-section/Card"
import { Helmet } from "react-helmet";

const Works = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Helmet >
        <title>Mathias Cianni — Proyectos</title>
      </Helmet>
      <main className="px-mob md:px-tab lg:px-desk 2xl:px-desk-xl py-16 lg:py-32 min-h-screen">
        <h1 className="font-title font-bold text-primary text-2xl uppercase">Desarrollado con pasión y detalle</h1>
        <motion.section 
        variants={fadeInContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-8 mt-4 lg:mt-6">
          
          {
            projects.map((project, index) => (
              <Card key={project.id} card={project} index={index} />
            ))
          }
        </motion.section>
      </main>
    </Layout>
  )
}

export default Works