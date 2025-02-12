//Layout
import Layout from "../layout/Layout"

//Constants
import { projects } from "../constants/projects"

//Components
import Card from "../components/home-view/work-section/Card"
import { Helmet } from "react-helmet";

const Works = () => {
  return (
    <Layout>
      <Helmet >
        <title>Mathias Cianni — Proyectos</title>
      </Helmet>
      <main className="px-mob md:px-tab lg:px-desk 2xl:px-desk-xl py-16 lg:py-32 min-h-screen">
        <h1 className="font-title font-bold text-primary text-2xl uppercase">Desarrollado con pasión y detalle</h1>
        <section className="flex flex-col gap-8 mt-4 lg:mt-6">
          {
            projects.map((project, index) => (
              <Card key={project.id} card={project} index={index} />
            ))
          }
        </section>
      </main>
    </Layout>
  )
}

export default Works