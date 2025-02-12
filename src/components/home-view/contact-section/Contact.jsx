//Constants
import { contact, socials } from "../../../constants"

//Icons
import Right from "../../../assets/right.svg?react"

const Contact = () => {
    const actualDate = new Date().getFullYear();
    return (
        <footer className="bg-primary p-6 px-mob md:px-tab lg:px-desk 2xl:px-desk-xl text-dark" id="contact">
            <h2 className="mb-3 lg:mb-6 lg:text-2xl">Ya que llegaste hasta acá, <span className="font-bold">vamos a charlar</span></h2>
            <div className="block lg:flex lg:flex-wrap lg:gap-16 xl:gap-32 lg:mb-8">
                <div>
                    <h3 className="lg:mb-3 font-title font-bold text-primary-dark uppercase">Contactame</h3>

                    <ul className="flex gap-3 lg:gap-12 mb-6 lg:text-xl">
                        {contact.map((item, index) => (
                            <li key={index} className="group relative font-bold">
                                <div className="hidden lg:block top-[60%] left-1/2 absolute w-full transition-all -translate-y-1/2 group-hover:translate-x-1/2 duration-500">
                                    <Right className="group-hover:text-secondary transition-all duration-500" />
                                </div>
                                <span className="group-hover:text-secondary relative flex justify-center items-end gap-2 bg-primary transition-all">
                                    <img src={`/icons/${item.icon}.svg`} alt={item.name} className="lg:w-6 lg:h-6" />
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="lg:mb-3 font-title font-bold text-primary-dark uppercase">Conectemos</h3>

                    <ul className="flex justify-between lg:justify-start lg:gap-12 mb-6 lg:text-xl">
                        {socials.map((item, index) => (
                            <li key={index} className="group relative flex items-end gap-2 font-bold justfy-center">
                                <div className="hidden lg:block top-[60%] left-1/2 absolute w-full transition-all -translate-y-1/2 group-hover:translate-x-1/2 duration-500">
                                    <Right className="group-hover:text-secondary transition-all duration-500" />
                                </div>
                                <span className="group-hover:text-secondary relative flex justify-center items-end gap-2 bg-primary transition-all">
                                    <img src={`/icons/${item.icon}.svg`} alt={item.name} className="lg:w-6 lg:h-6" />
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="text-primary-dark text-center">Mathias Cianni &copy; {actualDate} · Todos los derechos reservados</p>
        </footer>
    )
}

export default Contact