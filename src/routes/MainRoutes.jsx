import { lazy } from "react";

//Routing
import { Routes, Route } from "react-router";

const Home = lazy(() => import("../views/Home.jsx"))
const Work = lazy(() => import("../views/Work.jsx"))
const Works = lazy(() => import("../views/Works.jsx"))

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:id" element={<Work />} />
            <Route path="/extras" element={<h1>extras</h1>} />
            <Route path="/extras/:id" element={<h1>extras</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />

            {/* TODO: Admin */}
        </Routes>
    )
}

export default MainRoutes