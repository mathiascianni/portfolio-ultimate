import Navbar from "../components/Navbar"
import Contact from "../components/home-view/contact-section/Contact"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
    </>
  )
}

export default Layout