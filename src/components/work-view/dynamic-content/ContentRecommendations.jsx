import Card from "../../home-view/work-section/Card"
import { projects } from "../../../constants/projects"

const ContentRecommendations = ({ actualProject }) => {

    const recommendations = projects.filter((project) => project.id !== actualProject.id); //Saca el proyecto actual de las recomendaciones


    const similarProjects = recommendations.filter((project) => project.type === actualProject.type); //Filtrar por el mismo tipo de proyecto

    let toRender = similarProjects.slice(0, 3);

    if (similarProjects.length <= 0) {
        toRender = recommendations.slice(0, 3);
    }


    return (
        <>
            {
                toRender.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                ))
            }
        </>
    )
}

export default ContentRecommendations