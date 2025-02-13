//Constants
import { about } from "../../../constants"

//Components
import StyledParagraph from "./StyledParagraph"

const About = () => {
  return (
    <section className="lg:my-32 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl" id="about">
      <div className="flex md:flex-row flex-col lg:justify-center items-center gap-8 md:gap-16 lg:gap-20 xl:gap-32 2xl:px-32">
        <picture className="w-full">
          <source media="(min-width: 768px )" srcSet="/media/desktop/photo.jpg" />
          <img src="/media/mobile/photo.jpg" alt="Mathias Cianni" className="rounded-md w-full"/>
        </picture>
        <div className="py-6 w-full">
          <h2 className="mb-5 font-title font-bold text-xs lg:text-2xl uppercase">Apasionado por el desarrollo web y la tecnología</h2>
          {
            about.map((item, index) => (
              <p className="mb-4 w-full lg:text-xl" key={index}>
                <StyledParagraph text={item.text} />
              </p>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About