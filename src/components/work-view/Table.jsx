const Table = ({ details }) => {
    return (
        <table className="mt-4 mb-6 border border-primary w-full lg:text-xl border-collapse">
            <tbody>
                {
                    details && details.map((detail, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border border-primary font-bold text-primary">{detail.title}</td>
                            <td className="px-4 py-2 border border-primary">{detail.value}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table