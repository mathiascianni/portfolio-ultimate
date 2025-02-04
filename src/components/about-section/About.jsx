//Constants
import { about } from "../../constants"

//Components
import ImageParticles from "./ImageParticles"
import StyledParagraph from "./StyledParagraph"

const About = () => {
  return (
    <section className="px-mob md:px-tab lg:px-desk 2xl:px-desk-xl">
      <ImageParticles />
      <div className="py-6">
        <h2 className="mb-5 font-bold font-title text-xs uppercase">Sobre mi</h2>
        {
          about.map((item, index) => (
            <StyledParagraph key={index} text={item.text} />
          ))
        }
      </div>
    </section>
  )
}

export default About