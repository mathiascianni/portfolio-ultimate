//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router"

//Constants
import { projects } from "../constants/projects";

//Utils
import { textFormatter } from "../utils/textFormatter";

//Components
import Layout from "../layout/Layout";
import Badge from "../components/home-view/work-section/Badge";
import AnimatedLink from "../components/home-view/work-section/AnimatedLink";
import ContentRecommendations from "../components/work-view/dynamic-content/ContentRecommendations";
import { Helmet } from "react-helmet";
import ContentManager from "../components/work-view/ContentManager";
import StyledParagraph from "../components/home-view/about-section/StyledParagraph";


const Work = () => {
  const params = useParams();
  const [project, setProject] = useState({});
  const [formattedText, setFormattedText] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    const project = projects.find((project) => project.id === params.id);
    if (project) {
      setProject(project);
    }
  }, [params.id]);

  useEffect(() => {
    if (project.description) {
      setFormattedText(textFormatter(project.description))
    }
  }, [project]);

  return (
    <Layout>
      <Helmet >
        <title>{`Mathias Cianni — ${project.title}`}</title>
      </Helmet>
      <main className="pt-16">
        <div className="mt-4 lg:mt-6 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl">
          <img src={project.miniature} alt="" className="mb-4 rounded-sm w-full lg:max-h-[550px] object-center object-cover aspect-square" />
          <div className="lg:px-[100px]">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-title font-bold text-primary text-2xl uppercase">{project.title}</h1>
              <div className="flex gap-2 text-xl">
                <p>{project.date}</p>
                <p>{project.type}</p>
              </div>
            </div>
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
            <table className="mt-4 mb-6 border border-primary w-full lg:text-xl border-collapse">
              <tbody>
                {
                  project.details && project.details.map((detail, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 border border-primary font-bold text-primary">{detail.title}</td>
                      <td className="px-4 py-2 border border-primary">{detail.value}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

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