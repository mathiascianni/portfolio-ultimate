const Title = ({ title, date, type }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h1 className="font-title font-bold text-primary text-2xl uppercase">{title}</h1>
            <div className="flex gap-2 text-xl">
                <p>{date}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Title