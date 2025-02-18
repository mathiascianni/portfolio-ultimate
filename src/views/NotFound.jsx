//Hooks
import { useEffect } from "react"

//Layout
import Layout from "../layout/Layout"

//Components
import { Link } from "react-router"

const NotFound = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <main className="flex flex-col justify-center px-mob md:px-tab lg:px-desk 2xl:px-desk-xl min-h-screen">
                <h1 className="mb-4 lg:mb-6 font-title font-bold text-primary text-xl lg:text-4xl uppercase">La página que buscas se ha eliminado o no existe.</h1>
                <p className="mb-4 lg:mb-6 lg:text-xl">Podés hacer lo siguiente:</p>
                <ul className="flex flex-col gap-2 lg:text-xl list-disc list-inside">
                    <li>Podés <Link to="/" className="font-bold text-primary hover:text-secondary transition-all">volver al inicio</Link>.</li>
                    <li>También <Link to="/works" className="font-bold text-primary hover:text-secondary transition-all">ver mis proyectos</Link>.</li>
                    <li>O también <Link to="/extras" className="font-bold text-primary hover:text-secondary transition-all">explorar mis extras</Link>.</li>
                </ul>
            </main>
        </Layout>
    )
}

export default NotFound