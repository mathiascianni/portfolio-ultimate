const ContentList = ({ ordered, data }) => {
    if (ordered) {
        return <ol className="mb-6 lg:text-xl list-decimal list-inside">
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    }
    return <ul className="mb-6 lg:text-xl list-disc list-inside">
        {data.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
}

export default ContentList