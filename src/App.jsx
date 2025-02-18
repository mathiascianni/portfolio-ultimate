//Routes
import MainRoutes from "./routes/MainRoutes"

//Components
import Navbar from "./components/Navbar"

const App = () => {


    return (
        <>
            <Navbar /> {/* ! Siempre tiene que estar por fuera del AnimatePresence */}
            <MainRoutes />
        </>
    )
}

export default App