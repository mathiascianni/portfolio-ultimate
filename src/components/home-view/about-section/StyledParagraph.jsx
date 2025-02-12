import { textFormatter } from "../../../utils/textFormatter"
const StyledParagraph = ({ text }) => {
  const formattedText = textFormatter(text);

  return (
    <p className="mb-4 w-full md:w-[280px] lg:w-[350px] xl:w-[400px] lg:text-xl">{formattedText.map((part, index) => (
      part.highlighted ?
        <span key={index} className="relative font-bold text-primary">{part.text}
          <span className="bottom-0 left-0 absolute flex gap-1 w-full h-px">
            <span className="bottom-0 left-0 bg-primary w-[20%] h-px"></span>
            <span className="bottom-0 left-0 bg-primary w-[20%] h-px"></span>
            <span className="bottom-0 left-0 bg-primary w-full h-px"></span>
          </span>
        </span>
        :
        <span key={index}>{part.text}</span>))}</p>
  )
}

export default StyledParagraph