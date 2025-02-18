//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router"

//Constants
import { projects } from "../constants/projects";

//Animation
import { motion } from "motion/react"

//Components
import Layout from "../layout/Layout";
import Badge from "../components/home-view/work-section/Badge";
import AnimatedLink from "../components/home-view/work-section/AnimatedLink";
import ContentRecommendations from "../components/work-view/dynamic-content/ContentRecommendations";
import { Helmet } from "react-helmet";
import ContentManager from "../components/work-view/ContentManager";
import StyledParagraph from "../components/home-view/about-section/StyledParagraph";
import Banner from "../components/work-view/Banner";
import Title from "../components/work-view/Title";
import Table from "../components/work-view/Table";


const Work = () => {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    const project = projects.find((project) => project.id === params.id);
    if (project) {
      setProject(project);
    }
  }, [params.id]);


  return (
    <Layout>
      <Helmet >
        <title>{`Mathias Cianni — ${project.title}`}</title>
      </Helmet>
      <main className="pt-16">
        <div className="mt-4 lg:mt-6 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl">
          <Banner {...project} />
          <div className="lg:px-[100px]">
            <Title {...project} />
            <div className="flex flex-wrap gap-2 mb-4">
              {
                project.tags && project.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))
              }
            </div>
            <p className="mb-4 lg:mb-6 lg:text-xl">
              {
                project.description && (
                  <StyledParagraph text={project.description} />
                )
              }
            </p>
            {
              project.link ?
                <AnimatedLink href={project.link} target="_blank">Visitar Sitio</AnimatedLink>
                :
                <p className="text-primary">* Proyecto finalizado y entregado, sin implementación en servidor</p>
            }

            <Table {...project} />

            <h2 className="mb-4 font-title font-bold text-primary uppercase">Tecnologías utilizadas</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {
                project.techs && project.techs.map((tech, index) => (
                  // TODO: cada uno te manda a /work con el filtro añadido
                  <Badge key={index}>#{tech}</Badge>
                ))
              }
            </div>
            {
              project.content && (
                <ContentManager content={project.content} />
              )
            }
            <section className="mb-6 lg:mb-16">
              <h2 className="mb-4 lg:mb-6 font-title font-bold text-primary uppercase">Proyectos similares</h2>
              <div className="flex flex-col gap-8">
                <ContentRecommendations actualProject={project} />
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Work