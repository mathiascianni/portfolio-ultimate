import { useSearchParams } from "react-router";


const FilterSelect = ({ options, initial }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedTech = searchParams.get("tech") || "";

    const handleChange = (event) => {
        const tech = event.target.value;
        if (tech) {
            setSearchParams({ tech }); // Actualiza la URL
        } else {
            setSearchParams({}); // Remueve el filtro si está vacío
        }
    };

    return (
        <select value={selectedTech} onChange={handleChange} className="bg-dark p-2 border-primary border-b focus:outline-none text-primary cursor-pointer">
            <option value="">{initial}</option>
            {options.map((option) => (
                <option key={option} value={option} className="block py-4">
                    {option}
                </option>
            ))}
        </select>
    )
}

export default FilterSelect