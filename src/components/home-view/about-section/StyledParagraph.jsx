import { textFormatter } from "../../../utils/textFormatter"
const StyledParagraph = ({ text }) => {
  const formattedText = textFormatter(text);

  return (
    <>
      {formattedText.map((part, index) => (
        part.highlighted ?
          <span key={index} className="relative font-bold text-primary">{part.text}</span>
          :
          <span key={index}>{part.text}</span>))}
    </>
  )
}

export default StyledParagraph