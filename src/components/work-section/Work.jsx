//Constants
import { projects } from "../../constants/projects"

//Components
import Card from "./Card"

const Work = () => {
  return (
    <section className="my-16 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl">
      <div className="gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          projects.map((card, index) => (
            <Card card={card} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Work