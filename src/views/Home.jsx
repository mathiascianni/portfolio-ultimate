//Layout
import Layout from "../layout/Layout"

//Sections
import Header from "../components/home-view/header-section/Header"
import About from "../components/home-view/about-section/About"
import Techs from "../components/home-view/techs-section/Techs"
import Work from "../components/home-view/work-section/Work"


//Components
import { Helmet } from "react-helmet"

const MainContent = () => {
  return (
    <Layout>
      <Helmet >
        <title>Mathias Cianni — Portfolio</title>
      </Helmet>
      <Header />
      <main>
        <Work />
        <About />
        <Techs />
      </main>
    </Layout>
  )
}

export default MainContent