//Components
import StyledParagraph from "../../home-view/about-section/StyledParagraph";

const ContentSection = ({ title, text }) => {

  return (
    <div className="mb-6">
      <h2 className="mb-2 font-title font-bold text-primary uppercase">{title}</h2>
      <p className="lg:text-xl">
        <StyledParagraph text={text} />
      </p>
    </div>
  )
}

export default ContentSection