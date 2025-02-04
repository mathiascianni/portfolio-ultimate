//Sections
import Header from "../components/header-section/Header"
import About from "../components/about-section/About"

//Icons
import Separator from "../assets/separator.svg?react"

const MainContent = () => {
  return (
    <>
        <Header />
        <Separator className="w-full" />
        <div className="min-h-screen"></div>
        <Separator className="w-full -scale-x-100" />
        <About />
    </>
  )
}

export default MainContent