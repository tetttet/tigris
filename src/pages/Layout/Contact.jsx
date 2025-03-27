import MedNavbar from '../../components/Navbar/MedNavbar'
import Footer from '../../components/Footer/Footer'
import MedContact from '../../components/Contact'
import CallToAction from '../../components/elements/CallToAction'
import Breadcrumb from '../../components/elements/Breadcrumb'

const Contact = () => {
  return (
    <>
      <MedNavbar />
      <Breadcrumb pageName='Contact Page' pageDescription='Contact Us' />
      <MedContact />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Contact