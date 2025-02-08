//Constants
import { contact, socials } from "../../constants"

const Contact = () => {
    const actualDate = new Date().getFullYear();
    return (
        <footer className="bg-primary p-6 text-dark">
            <h2 className="mb-3">Ya que llegaste hasta acá, <span className="font-bold">vamos a charlar</span></h2>
            <h3 className="font-bold font-title text-primary-dark uppercase">Contactame</h3>

            <ul className="flex flex-col gap-3 mb-6">
                {contact.map((item, index) => (
                    <li key={index} className="flex items-end gap-2 font-bold justfy-center">
                        <img src={`/icons/${item.icon}.svg`} alt={item.name} />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                    </li>
                ))}
            </ul>

            <h3 className="font-bold font-title text-primary-dark uppercase">Conectemos</h3>

            <ul className="flex justify-between mb-6">
                {socials.map((item, index) => (
                    <li key={index} className="flex items-end gap-2 font-bold justfy-center">
                        <img src={`/icons/${item.icon}.svg`} alt={item.name} />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                    </li>
                ))}
            </ul>

            <p className="text-primary-dark">&copy; {actualDate} Mathias Cianni · Todos los derechos reservados</p>
        </footer>
    )
}

export default Contact