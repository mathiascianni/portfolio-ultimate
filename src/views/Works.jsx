//Hooks
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

//Animation
import { motion } from "motion/react"
import { fadeInContainer } from "../constants/animations";

//Layout
import Layout from "../layout/Layout"

//Constants
import { projects } from "../constants/projects"
import { techs } from "../constants/techs";

//Components
import Card from "../components/home-view/work-section/Card"
import { Helmet } from "react-helmet";
import FilterSelect from "../components/work-view/FilterSelect";

const Works = () => {
  const [searchParams] = useSearchParams();
  const tech = searchParams.get("tech");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (tech) {
      const filteredProjects = projects.filter((project) => project.techs.includes(tech));
      setFilteredProjects(filteredProjects);
    } else {
      setFilteredProjects(projects);  
    }
  }, [tech]);

  return (
    <Layout>
      <Helmet >
        <title>Mathias Cianni — Proyectos</title>
      </Helmet>
      <main className="mb-16 lg:mb-32 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl pt-16 lg:pt-24 min-h-screen">
        <h1 className="pt-16 pb-4 font-title font-bold text-primary text-2xl lg:text-4xl uppercase">Desarrollado con pasión y detalle</h1>
        <FilterSelect options={techs} initial="Todas las tecnologías" />
        <motion.section 
        variants={fadeInContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 mt-4 lg:mt-6">
          {
            filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
              <Card key={project.id} card={project} index={index} />
            )) : <p className="text-primary text-2xl">Por ahora no hay proyectos</p>
          }
        </motion.section>
      </main>
    </Layout>
  )
}

export default Works