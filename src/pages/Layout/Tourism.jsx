import Breadcrumb from "../../components/elements/Breadcrumb"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import MedNavbar from "../../components/Navbar/MedNavbar"
import { BannerSection, CastIronInfo } from "../../components/Sections/Feature"

const Tourism = () => {
  return (
    <>
        <MedNavbar />

        <Breadcrumb pageName='Tigris Group' pageDescription='Tigris Group: A Leader in National and International Events' />
        <BannerSection />
        <Hero />
        <CastIronInfo />
        
        <Footer />
    </>
  )
}

export default Tourism