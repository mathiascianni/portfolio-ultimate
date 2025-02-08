//Sections
import Header from "../components/header-section/Header"
import About from "../components/about-section/About"
import Techs from "../components/techs-section/Techs"
import Work from "../components/work-section/Work"


//Icons
import Separator from "../assets/separator.svg?react"

const MainContent = () => {
  return (
    <>
      <Header />
      <Separator className="w-full" />
      <Work />
      <div className="relative">
        <Separator className="-top-px absolute w-full -scale-x-100" />
      </div>
      <About />
      <Techs />
    </>
  )
}

export default MainContent