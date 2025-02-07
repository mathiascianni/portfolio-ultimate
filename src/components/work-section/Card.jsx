import Badge from "./Badge"

const Card = ({ card }) => {

    if (card.tags.length > 2) {
        card.tags = card.tags.slice(0, 2);
        card.tags.push("...")
    }

    return (
        <article>
            <h3 className="mb-2 font-title text-xs uppercase">{card.title}</h3>
            <p className="mb-2 font-bold font-title text-primary uppercase">{card.subtitle}</p>
            <div className="flex items-center gap-2 mb-3">
                {
                    card.tags.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))
                }
            </div>
            <img className="mb-2 rounded-md w-full object-cover" src={card.miniature} alt="" />
            <div className="flex justify-between items-center">
                <p>{card.date}</p>
                <a href={card.link} className="font-bold text-primary uppercase">Ver proyecto &gt;</a>
            </div>
        </article>
    )
}

export default Card