import Navbar from "../components/Navbar"
import Contact from "../components/contact-section/Contact"
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