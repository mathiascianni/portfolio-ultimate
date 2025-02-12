const ContentSection = ({title, text}) => {
  return (
    <div className="mb-6">
        <h2 className="mb-2 font-title font-bold text-primary uppercase">{title}</h2>
        <p className="lg:text-xl">{text}</p>
    </div>
  )
}

export default ContentSection