//Constants
import { about } from "../../../constants"

//Components
import ImageParticles from "./ImageParticles"
import StyledParagraph from "./StyledParagraph"

const About = () => {
  return (
    <section className="lg:my-32 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl" id="about">
      <div className="flex md:flex-row-reverse flex-col lg:justify-center items-center md:gap-32">
        <ImageParticles />
        <div className="py-6">
          <h2 className="mb-5 font-title font-bold text-xs lg:text-2xl uppercase">Sobre mi</h2>
          {
            about.map((item, index) => (
              <StyledParagraph key={index} text={item.text} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About