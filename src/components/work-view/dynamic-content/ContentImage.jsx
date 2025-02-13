const ContentImage = ({ src, alt, footer }) => {
  return (
    <figure className="mb-6">
      <img src={src} alt={alt} className="mb-2 rounded-sm w-full lg:max-h-[550px] object-center object-cover aspect-square" />
      <figcaption className="text-xs text-center">{alt}</figcaption>
    </figure>
  )
}

export default ContentImage