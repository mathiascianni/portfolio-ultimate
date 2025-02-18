
//Lazy
import { lazy } from "react";

//Routing
import { Routes, Route, useLocation } from "react-router";

//Animation
import { AnimatePresence } from "motion/react";

//Components
import PageTransition from "../components/PageTransition.jsx";

//Views
const Home = lazy(() => import("../views/Home.jsx"))
const Work = lazy(() => import("../views/Work.jsx"))
const Works = lazy(() => import("../views/Works.jsx"))
const Extras = lazy(() => import("../views/Extras.jsx"))
const NotFound = lazy(() => import("../views/NotFound.jsx"))

const MainRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
                <Route path="/works/:id" element={<PageTransition><Work /></PageTransition>} />
                <Route path="/extras" element={<PageTransition><Extras /></PageTransition>} />
                <Route path="/extras/:id" element={<h1>extras</h1>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />

                {/* TODO: Admin */}
            </Routes>
        </AnimatePresence>
    )
}

export default MainRoutes